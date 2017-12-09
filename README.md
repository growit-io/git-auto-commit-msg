# git-auto-commit-msg [![Build Status](https://travis-ci.org/growit-io/git-auto-commit-msg.svg?branch=master)](https://travis-ci.org/growit-io/git-auto-commit-msg)
`git-auto-commit-msg` generates a conventional commit message from any changed files found in the working tree.

## Example
    $ rm -f file-[12345]
    $ for x in $(seq 1 5); do touch file-$x; done
    $ git add file-[123]
    $ git-auto-commit-msg file-[12345]
    add file-1, file-2 and 1 more
