#!/usr/bin/env node

var cmd = require('./src/cmd');

var ALLOWED_COMMANDS = [
  'install',
  'help'
];

var ALLOWED_FLAGS = [
  '-v'
]

var input = process.argv.slice(2).filter(function(command, index, array) {
  return (ALLOWED_COMMANDS.indexOf(command) != -1) ||
         (ALLOWED_FLAGS.indexOf(command) != -1);
});

if (!(input.length > 0)) { return cmd.version(); }

var argc_with_flags = input.length;
var argc_without_flags = input.filter(function(command) {
  return (ALLOWED_COMMANDS.indexOf(command) != -1);
}).length;


switch (input[0]) {
  case 'install':
    if (argc_without_flags <= 1) { return cmd.install(); }
    if (input[1].indexOf('@') != -1) {
      var split = input[1].split('@');
      var package_name = split[0];
      var version_number = split[1];

    } else {
      return cmd.install_package(input[1]);
    }
    break;
  case 'help':
    if (argc_without_flags <= 1) { return cmd.help("help"); }
    return cmd.help(input[1]);
    break;
  default:
    break;
}
