var path = require('path');
var fs = require('fs');
var http = require('http');

var semver = require('semver');
var gunzip = require('gunzip-maybe')
var tar = require('tar-fs')
var acc = require('acc');

var _0777 = parseInt('0777', 8);

function identity(a) { return a; }
function mkdir(p, opts, f, made) {
  if (typeof opts === 'function') {
    f = opts;
    opts = {};
  }
  else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts };
  }

  var mode = opts.mode;
  var xfs = opts.fs || fs;

  if (mode === undefined) {
    mode = _0777 & (~process.umask());
  }

  if (!made) made = null;

  var cb = f || function () {};
  p = path.resolve(p);

  xfs.mkdir(p, mode, function (er) {
    if (!er) {
      made = made || p;
      return cb(null, made);
    }
    switch (er.code) {
      case 'ENOENT':
        mkdir(path.dirname(p), opts, function (er, made) {
          if (er) cb(er, made);
          else mkdir(p, opts, cb, made);
        });
        break;

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, function (er2, stat) {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) cb(er, made)
          else cb(null, made);
        });
        break;
    }
  });
}


// TODO(vy):
// - Pursue promise-based system.
// - Migrate generic filesystem code into own module
// - Add better logging
// - Progress bar?

module.exports = {
  resolve: function(dep, version, cb) {
    console.info('edpm -', 'resolving', dep + '@' + version);
    cb = cb || function () {};
    http.get('http://registry.npmjs.org/' + dep, function(res) {
      if (res.statusCode !== 200) return cb(new Error('non 200 statusCode from registry', res.statusCode));
      var raw = '';
      res.on('data', function (chunk) { raw += chunk });
      res.on('end', function () {
        var parsed = JSON.parse(raw);
        var resolved = parsed.versions[semver.maxSatisfying(Object.keys(parsed.versions), version)];
        cb(resolved ? null : new Error('no satisfying target found for ' + dep + '@' + version), resolved);
      }).on('error', cb);
    }).on('error', cb);
  },

  fetch: function(where, what, cb) {
    console.info('edpm -', 'fetching', what.name + '@' + what.version, 'into', path.relative(process.cwd(), where));
    cb = cb || function () {};
    http.get(what.dist.tarball, function(res) {
      if (res.statusCode !== 200) return cb(new Error('non 200 statusCode from registry', res.statusCode));
      res.pipe(gunzip()).pipe(tar.extract(where, {
        map: function(header) {
          header.name = header.name.split('/').slice(1).join('/');
          return header;
        }
      })).on('finish', cb).on('error', cb);
    }).on('error', cb);
  },

  install: function(where, what, family, devDeps, depth, cb) {
    var relative_path = path.relative(process.cwd(), where);
    var _this = this;

    if (relative_path == "") {
      console.info('edpm -', 'installing', what.name + '@' + what.version);
    } else {
      console.info('edpm -', 'installing', what.name + '@' + what.version, 'into', relative_path);
    }

    mkdir(where, function(err) {
      if (err) return cb(err);

      var deps = Object.assign({}, what.dependencies, devDeps ? what.devDependencies : {});
      var numDeps = Object.keys(deps).length;

      var onInstalled = acc((depth === 0 ? 0 : 1) + 1, function (errs) {
        if ((errs || []).filter(identity).length) return cb(errs.filter(identity)[0])
        if (depth === 0) return cb()
        fs.writeFile(path.join(where, 'package.json'), JSON.stringify(what, null, 2), cb)
      });

      var onResolved = acc(numDeps, function(errs, deps) {
        if (errs.filter(identity).length) return cb(errs.filter(identity)[0]);

        deps.forEach(function (dep) {
          if (family[dep.dist.shasum]) return
          family[dep.dist.shasum] = true
          onInstalled.count++
          _this.install(path.join(where, 'node_modules', dep.name), dep, Object.create(family), false, depth + 1, onInstalled)
        });

        onInstalled();
      });

      if (!numDeps) onInstalled();
      for (var dep in deps) _this.resolve(dep, what.dependencies[dep], onResolved);

      if (depth > 0) {
        _this.fetch(where, what, function (err) {
          if (err) return cb(err)
          if (depth > 1) return onInstalled()
          _this.linkBin(where, what, path.join(where, '..', '.bin'), onInstalled)
        });
      }
    });
  },

  linkBin: function(where, what, to, cb) {
    cb = cb || function () {};
    mkdir(to, function(err) {
      if (err) return cb(err);

      var bin = what.bin;
      if (typeof bin === 'string') {
        bin = {};
        bin[what.name] = what.bin;
      }
      bin = bin || {};

      var onLinked = acc(Object.keys(bin).length + 1, function (errs) {
        if ((errs || []).filter(identity).length) return cb(errs.filter(identity)[0]);
        cb();
      })

      onLinked();

      for (var name in bin)
        fs.symlink(path.join(path.relative(to, where), bin[name]), path.join(to, name), onLinked);
    });
  }
};
