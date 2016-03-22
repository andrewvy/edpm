var path = require('path');
var fs = require('fs');

var acc = require('acc');

var Utils = require('./utils');
var Registry = require('./registry');

var HELP_DOCS = {
  'help': "edpm help <command> - Displays help for a particular command",
  'install': "edpm install - Installs dependenceis specified in package.json\n" +
             "edpm install <package> - Installs the given package\n" +
             "edpm install <package>@<version> - Installs the given package with version"
};

// TODO(vy):
// - Split out logging system into a more colorful module.
// - Support flags

module.exports = {
  noop: function() { return null; },
  unrecognized: function() { return console.info("Unrecognized command."); },
  error: function(msg) { return console.error("edpm", msg); },
  handleError: function(msg) {
    if (msg) return this.error(msg);

    return console.info("Successfully installed.");
  },

  version: function() {
    console.info(" _  _| _  _ _   \n"+
                 "(/_(_||_)| | |  \n"+
                 "      |");
    console.info("edpm <v0.0.1> - educational package manager\n");
  },

  help: function(command) {
    if (command == "help") {
      Object.keys(HELP_DOCS).map(function(key) {
        console.info(HELP_DOCS[key]);
      });
    } else if (HELP_DOCS[command]) {
      return console.info(HELP_DOCS[command]);
    } else {
      return this.noop();
    }
  },

  install: function() {
    try {
      var package_json = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')));
    } catch (e) {
      return this.error("package.json not found");
    }

    Registry.install(process.cwd(), package_json, {}, true, 0, this.handleError);
  },

  // TOOO(vy): Need to selectively install package names.
  install_package: function(package_name, version) {
    if (package_name == "" || package_name == null) return;
    version = version || "*";
    var _this = this;
    var depth = 0;
    var family = {};
    var where = process.cwd();

    console.info('edpm -', 'installing single package', package_name);

    var onInstalled = acc((depth === 0 ? 0 : 1) + 1, function (errs) {
      if ((errs || []).filter(Utils.identity).length) return _this.handleError(errs.filter(Utils.identity)[0])
      if (depth === 0) return _this.handleError()
    });

    var onResolved = acc(1, function(errs, deps) {
      if (errs.filter(Utils.identity).length) return _this.handleError(errs.filter(Utils.identity)[0]);

      deps.forEach(function (dep) {
        if (family[dep.dist.shasum]) return;
        family[dep.dist.shasum] = true;
        onInstalled.count++;

        Registry.install(path.join(where, 'node_modules', dep.name), dep, Object.create(family), false, depth + 1, onInstalled);
      });

      onInstalled();
    });

    Registry.resolve(package_name, version, onResolved);
  }
};
