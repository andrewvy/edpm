var path = require('path');
var fs = require('fs');

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

    Registry.install(process.cwd(), package_json, {}, true, 0, this.noop);
  },

  install_package: function(package_name) {
    // TOOO(vy): Need to selectively install package names.
  }
};
