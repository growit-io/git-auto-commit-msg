#!/usr/bin/env node
const program = require('commander');
const readline = require('readline');
const shell = require('shelljs');
const shellescape = require('shell-escape');

// Show these many paths and then append " and x more"
const DEFAULT_SHOW_PATHS = 2

program
  .arguments('[paths...]')
  .description('Generates a conventional commit message based on staged changes')
  .parse(process.argv)

shell.exec(
  'git status -s -- ' + shellescape(program.args),
  {silent: true},
  function (code, stdout, stderr) {
    if (code != 0) {
      throw new Error(stderr)
    }

    var added = []
    var updated = []
    var deleted = []
    var lines = stdout.split(/\r?\n/);

    for (var n in lines) {
      var line = lines[n]
      var file = line.slice(3)
      var x = line[0] // tree -> index
      var y = line[1] // index -> work tree

      if (x === 'A') {
        added.push(file)
      } else if (x === 'M') {
        updated.push(file)
      } else if (x === 'D') {
        deleted.push(file)
      }
    }

    var changes = added.concat(updated).concat(deleted);
    if (changes.length === 0) {
      // No changes, no commit message
      return
    }

    var actions = []
    if (added.length > 0) {
      actions.push('add')
    }
    if (updated.length > 0) {
      actions.push('update')
    }
    if (deleted.length > 0) {
      actions.push('remove')
    }

    console.log(actionlist(actions) + ' ' + filelist(changes))
  }
);

function actionlist(actions) {
  return actions.sort().join('/')
}

function filelist(paths, options) {
  options = options || {}
  var show = options.show || DEFAULT_SHOW_PATHS

  if (paths.length === 1) {
    return paths[0]
  } else if (paths.length > show) {
    var rest = paths.slice(show)
    return paths.slice(0, show).join(', ') + ' and ' + rest.length + ' more'
  } else {
    var first = paths.slice(0, paths.length - 1)
    var last = paths[paths.length - 1]
    return first.join(', ') + ' and ' + last
  }
}
