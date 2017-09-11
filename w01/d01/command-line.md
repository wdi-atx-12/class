![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# Command Line Interface

## Lesson Objectives

_After this workshop, developers will be able to:_

* Navigate the file system from the command line.
* Create, move, copy, and delete files or directories from the command line.
* Explain and give examples of flags.
* Navigate using relative paths on the command line .
* Describe the uses of the sudo and chmod commands.

### Why is this important?
*This workshop is important because:*

Most people are familiar with their computers' graphical user interface, rich with icons and buttons. The command line interface, or CLI, is an alternative without these fancy graphics -- a plain, text-­based interface for performing tasks on a computer.

Many of the tasks developers perform are faster when done from the command line, and the command line interface usually has some extra features that are hidden in normal graphical interfaces. That's because programmers assume someone using the command line is more knowledgeable about their computer and less likely to make mistakes. Think about that from an employment perspective, too. As a developer, you will be expected to be proficient with your computer, including performing basic tasks on the command line.


## What is the Command Line Interface?

- A CLI is a program to interact with a computer through text.  It is the most powerful piece of software on your computer! Mac's command line "shell" program is called Terminal. It lets users interact with the operating system.  It's a "Read, Evaluate, Print, Loop"-style program. For now, we will use it to navigate the files and folders in our computer.

  **Open Terminal**

  - `⌘ (Command) + Space`, or open Spotlight
  - "*Te*rminal"
  - `Enter`
  - Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".

- When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`.
- In Terminal-land, **Directories** are the same as **Folders** (we just call them **Directories**).
- In **Finder**, we can also navigate our computer's folders and files: folders contain files and more folders


## Bash Commands

The Command Line understands commands written in the `bash scripting language` - default command line language for macOS and many Linux distributions. The commands are abbreviations of English words, or acronyms. You may also eventually use variants like `zsh`, `ash`, `ssh`, and their predecessor `sh`.

  **You do:** In Terminal, use the bash command `pwd`.  What does it tell you?

- `pwd` - will print the current working directory. It shows you a `path`. This `path` shows you where are currently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.

- `ls` - Lists the contents of the current directory. You can see
	* the  immediate _child_ directories (the directories inside this directory)
	* the files and directories that are not hidden.

- Bash commands can take `flags` denoted by a dash `-`
	- `ls -a` - list content including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.

> Note: `git` commands are not part of the bash language. They use bash, and they're added separately when you install git.

Commands on the command line work a lot like functions in JavaScript. The base command is often followed by some number of arguments, and/or by some options or flags.

For example, let's take the command `tree`. This isn't a built-in part of bash; it's an extra command that can be useful for viewing the entire file tree of a file or directory.

Here's how we might use `tree`:

```bash
tree ~/Desktop -L 2 -d
```

The main command here is `tree`.

Next, there's a relative file path for a directory: `~/Desktop`. That's the target of the tree command. You can think of it like an argument to the `tree` function.

Then, there's a `-L` flag. Flags are special options that make it easier to customize how a command behaves.  For `tree`, `-L` lets us set how many "levels" of files and directories we want to see.   `-L 2` means we'll only see two levels in the file tree.

There's also a `-d` flag, which means only directories will be shown in the file tree.  

> Note: While the main command must always come first, you can often put flags before or after the other arguments. Pay attention to the documentation for a command to see how it can be used.


## CHANGING DIRECTORIES

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory`
	- navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..`
	- navigates into the parent of the current directory
	- `..` is shorthand for parent
- `cd` will take you back home

**Shortcuts**

- letter[TAB]
	- autocompletes (case-sensitive)

- up / down arrow
	- cycle command history

## MAKING DIRECTORIES AND FILES

`mkdir` - makes a directory

Example:

- `mkdir directory_name`

	> makes a directory called 'directory_name'`

`touch` - creates an empty file. A file typically will have a **file extension** like `.txt` whereas a directory will not.


Example:

- `touch file.txt`

	> makes a .txt file


**Activity (10 min)**

**Construct a Labyrinth**

Using what you know about navigating directories and creating files and folders, construct a 'labyrinth' on your desktop.

**Precision** is important. There are a few layers to this exercise. Be patient.

- Make sure you are in the correct directory when you go to create another directory or file.
- Make sure you use `touch` to make files, and `mkdir` to make directories. **files** and **directories** are two different things.

* Navigate to Desktop
* `mkdir Labyrinth`, `cd Labyrinth`
* Make a directory structure like this:

![labyrinth](https://i.imgur.com/V1zaeBT.png)

**parlor** and **stairway** are _child directories_ of the Labyrinth directory.

**sarah_williams.txt** is a _file_ inside the the ballroom directory.

If you make a mistake, don't worry, just keep adding the right stuff to the right place.


#### Getting more information about a command:

0. `man`

1. `--help`

2. Online searches (try adding "in bash" or "Terminal" to your search).


**You do:** Practice using the resources above - to define each of the essential commands and common flags below!

#### Essential Commands


0. `man`

1. `cd`

2. `ls`

3. `mkdir`

4. `touch`

5. `mv`

6. `rm`

7. `cp`


## Navigation: RELATIVE PATHS

**`.` (current directory)**

Chain more directories to the current path with the `/` separator

- Go down the chain into child directories
	- `cd parent_directory`
	- `cd parent_directory/child_directory`
	- `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories
	- `cd ..`
	- `cd ../..`
	- `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down
	- `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:

	- `cd ../../auntie_directory`


## Navigation: ABSOLUTE PATHS

**`/` (root directory)**

`/` is the computer's root directory, which contains all the files on the computer.

**`~` (home directory)**

  `~` is the home directory for the current user. In Finder, it's named with your user name. You can `ls ~` to see everything inside it - things like Desktop, Documents, Downloads.

  * **You do:** In Finder, press CMD SHIFT H to enter your home directory. Then press CMD ArrowUp to go one directory up, to the Users directory.  Find the home directory with your user name, and drag it into your favorites so it's easy to find later!

> NOTE: You can combine absolute and relative pathing when copying or moving files from one location to another with `cp` and `mv`.


#### Commands for permissions:

1. `sudo`: run a command as another user, usually the "super user" with significantly more permissions. **Make sure you understand the effect a `sudo` command will have before you run it and that you trust its source.** See the [man page](https://www.freebsd.org/cgi/man.cgi?query=sudo&apropos=0&sektion=0&manpath=FreeBSD+10.3-RELEASE+and+Ports&arch=default&format=html) and/or [wikipedia](https://en.wikipedia.org/wiki/Sudo).

2. `chmod`: change which users and groups have permission to access a file or directory. **Use with care.**  See the [man page](https://www.freebsd.org/cgi/man.cgi?query=chmod&apropos=0&sektion=0&manpath=FreeBSD+10.3-RELEASE+and+Ports&arch=default&format=html) and/or an [explanation](http://www.seas.upenn.edu/cets/answers/chmod.html).

### Closing Thoughts

**Review!**

1. What is `bash`?

1. What is a "shell"?

1. What will be your go-to resource to learn about an unfamiliar command?

**Put it into practice!**

New commands and shortcuts will take a while to get used to. Practice with them to get more comfortable and more efficient working with your computer.

1. When you need to work with your file system in WDI, use the command line.  Build a habit of using `cd`, `ls`, `mkdir`, and `touch`.

1. Another important part of using your computer efficiently is learning keyboard shortcuts.  Get used to using `Command Space` to open spotlight for searching, `Command Tab` to switch between programs, and `Command F` to find a phrase in a program you have open.

If you're already comfortable with the Terminal commands and shortcuts listed above, choose three from the resources below to start focusing on. Write these down on a sticky note, and stick it inside your laptop or somewhere that will help you remember to use them.


### Additional Resources

1. [Mac & Atom Keyboard Shortcuts](https://github.com/SF-WDI-LABS/how-to/blob/master/keyboard-shorcuts.md)
1. [Terminal Commands](https://github.com/SF-WDI-LABS/how-to/blob/master/command-line.md)
