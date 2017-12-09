# git-auto-commit-msg [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

`git-auto-commit-msg` generates a conventional commit message from any changed files found in the working tree.

## Example
    $ rm -f file-[12345]
    $ for x in $(seq 1 5); do touch file-$x; done
    $ git add file-[123]
    $ git-auto-commit-msg file-[12345]
    add file-1, file-2 and 1 more

## Build Status
| branch   | status |
|:-------- |:------ |
| [master] | [![Build Status](https://travis-ci.org/growit-io/git-auto-commit-msg.svg?branch=master)](https://travis-ci.org/growit-io/git-auto-commit-msg) |
| [next]   | [![Build Status](https://travis-ci.org/growit-io/git-auto-commit-msg.svg?branch=next)](https://travis-ci.org/growit-io/git-auto-commit-msg) |

[master]: https://github.com/growit-io/git-auto-commit-msg/tree/master
[next]: https://github.com/growit-io/git-auto-commit-msg/tree/next
