# git-auto-commit-msg [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Build Status](https://travis-ci.org/growit-io/git-auto-commit-msg.svg?branch=master)](https://travis-ci.org/growit-io/git-auto-commit-msg)

`git-auto-commit-msg` attempts to generate a [conventional](https://conventionalcommits.org/) commit message from any changed files found in the working tree.

One or more `pathspec` arguments can be passed to optionally consider only the changes relative to those paths, as in `git status [<pathspec>...]`.

## Installation
    npm install -g git-auto-commit-msg

## Usage
By default, a simple summary of changed files is generated from the index.

    $ for x in $(seq 1 3); do touch file-$x; done
    $ git add -A
    $ git-auto-commit-msg
    add file-1, file-2 and 1 more

As stated above, paths can be restricted by one or more `pathspec` arguments, even if other files are also present in the index.

    $ for x in $(seq 1 5); do touch file-$x; done
    $ git add -A
    $ git-auto-commit-msg file-[12345]
    add file-1, file-2 and 1 more

Notice that the message only mentions three files, even though five were added to the index.

The `docs:` prefix is added if the changes are entirely limited to documentation paths.

    $ git-auto-commit-msg README.md CHANGELOG.md docs examples example
    docs: update README.md

## Changelog
See the [CHANGELOG.md](CHANGELOG.md) file.

## License
See the [LICENSE](LICENSE) file.
