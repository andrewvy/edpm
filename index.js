#!/usr/bin/env node

var cmd = require('./src/cmd');

var ALLOWED_COMMANDS = [
  'install',
  'help'
];

// TODO(vy): Act upon flags.
var ALLOWED_FLAGS = [
  '-v'
]

var input = process.argv.slice(2);

if (!(input.length > 0)) { return cmd.version(); }

var flagc = input.filter(function(flag) {
  return (ALLOWED_FLAGS.indexOf(flag) != -1);
}).length;

var argc = input.filter(function(command) {
  return (ALLOWED_COMMANDS.indexOf(command) != -1);
}).length;

switch (input[0]) {
  case 'install':
    if (input.length <= 1) return cmd.install();

    if (input[1].indexOf('@') != -1) {
      var split = input[1].split('@');
      var package_name = split[0];
      var version_number = split[1];
      return cmd.install_package(package_name, version_number);
    } else {
      return cmd.install_package(input[1]);
    }

    break;
  case 'help':
    if (argc <= 1) { return cmd.help("help"); }
    return cmd.help(input[1]);
    break;
  case null:
    cmd.version();
    break;
  default:
    cmd.unrecognized();
    break;
}
