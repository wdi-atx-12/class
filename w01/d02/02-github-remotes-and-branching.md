<!--
Creator: <Name>
Market: ATX
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# __Git(Hub)__

<!--
__*Git*__
__*GitHub*__
-->

*COMMIT EARLY, COMMIT OFTEN!*

### Objectives
*After this lesson, students will be able to:*  
- Create a repo on GitHub  
- Clone a repo FROM GitHub  
- Create branches AND merge
- Push code to a repo
- Explain why we use GitHub

### Preparation:  
*Before this lesson, students should already be able to:*  
- Explain the importance of Git  
- Use the command line  
- Create a git repository  
- Use basic git commands/functionality: *initialize*, *add/stage* changes, *status*, *commit*, *push*, *pull*  

## Review Git and Intro to GitHub  

As discussed earlier, __*Git*__ is a tool we use to keep track of the changes in our projects. However, __*GitHub*__ is a centralized place where we can keep our projects. Even though we stress the distinction between the two, Git and GitHub are almost inseparable in today's tech workflow.


GitHub allows us to collaborate with other developers outside our local network. This is where the “distributed” part of version control comes in. We are able to work on our code wherever the repo exists. GitHub is a central location where anyone can get the code. I can have a copy on my computer, as well as many other developers, and we can all work independently and still be able to bring our work back together.

GitHub is NOT a backup. It may be in the cloud, but it's still helpful to have real local and remote copies of our work.

> We have our own WDI-11 "org" similar to how a company may choose to store the various repositories that make up their codebase

Now that you’re a little more comfortable with the git commands and being able to make changes to a project, we’re going to expand our usage of GitHub a bit more.

Here's our motto again,
*COMMIT EARLY, COMMIT OFTEN!*

## Demo (we do):
### Creating a repo on Github

Although this lesson will not be focusing solely on Github, we are going to set up a "remote repository".
![Creating a repository](https://cloud.githubusercontent.com/assets/10953358/25371957/f606e5da-2958-11e7-9f79-eb720a203b64.png)

1. Click on the "+" icon in the header bar to the right.
2. Fill out the information about the repository

That's it, we've created a repository. Now let's go over how to communicate with it over Git on our command line

> The distinguishment between Git and Github is very important. **Git** is the tool that we use to track and move our files. **Github** is simply where we are storing these files.

### Creating a local repo
Create a new local Git repository:

```
$ cd ~/ga/wdi/exercises/learning-git
$ mkdir sample1
$ cd sample1
$ git init
```

* What just happened?
* Did your Shell Prompt change?

### Connecting our local repo to the remote
```
$ git remote add origin <URI>
```

* What's happening here?
What we did here is tell our local repository where our remote repository is located.

### Our first commit

Add some files:

```
$ touch README.md hello.txt
$ git status                  # What is an untracked file?
$ git add -A                  # Now the files are in the stage
$ git status
```

Commit the changes:

```
$ git commit -m "Added 2 files."
$ git status
$ git log
```

We've just done two things here:

1. We have staged all files that have been modified since the last commit
2. We have saved those changes into our local repository.


### Pushing to the remote repository

Now that we have saved these changes to the local repository, we can replicate, or **"push"** these same changes to a git repository located somewheres else.

```
$ git push origin master
```

The syntax for this is: `git push <remote> <branch>`, the "git push" command wants to know two things, where to send the changes, and which branch to send it down. The remote we named "origin" that we added earlier is this address, and "master" is our default branch.

> View these changes on GitHub, show what happened once we pushed our code.

That was a lot of information! Let's get some practice by playing a git simulation game.
[Code School: Try Git](https://try.github.io/)

<!--- Describe how branching and merging allows for collaboration during development) -->

### Branching and merging
What if we want to build a feature into our program, but we don't want it to be in our main code until it's **perfecto**?

What if two developers are working on two seperate things that could conflict with eachother at the same time?

This is where branching comes in. Branching in Git allows us to "break off" where we currently are in our program to **seperate workspace**, where we can make our new modifications, without disrupting our main codebase. Check it out:

![Git Branch](https://i.stack.imgur.com/eCgrM.png)

> Draw and explain this timeline on the board.

As Git monitors the changes we have made over time to our software, we can model it in our heads as a timeline, like such above, with each dot across the timeline being a **commit** to the code.

By default, when we create a repository, we are given one branch by default that git monitors our changes on, this is called the **master** branch, you can think of this as the main timeline of our code's history.

We can achieve branching with the following command:

```
$ git branch <branchname>
```
This command will create a new branch in git. We can then switch to that branch with the checkout command:

```
$ git checkout <branchname>
```

Or, alternatively:
```
$ git checkout -b branchname
```
this command will create a new branch in git, and then switch to that branch, all in one command.

*COMMIT EARLY, COMMIT OFTEN!*

### **Cloning Repositories**  

So far we have set up our repository from scratch, however, this isn't always the case. Sometimes we want to take an existing remote repository and bring it onto our computer locally.

The last thing we will do in this lesson is clone our WDI-11 schedule repo to our home directory in our filesystem.
```
$ git clone <URI>
```  
  
  
## [Git Haiku exercise](/03-git-haiku-activity.md) (~25 mins)  

## Conclusion and Review (15 mins)
* Review Git Terminology:
    - repository - a collection of related commits that form a directed acyclic graph
    - commit - a snapshot of the working tree at a giving time (along with a message of what changed)
    - the index (stage) - a staging area where we list changes we want to commit
    - branch - a set of commits that form a linear progression of changes
    - master - the default name for the "main" development branch
    - tag - an optional label on a commit
    - HEAD - what is currently checked out
    - working area - the directory and subdirectories containing the files we are currently working on
* Review Questions:
    - Can someone tell me what a Git Repository is?
    - What are some key components of a Git repo?
    - Can someone describe an important Git command (get several responses from students)  
    
# NEXT UP...  
## Team Git exercise:
https://github.com/wdi-atx-12/class/blob/master/w01/d02/04-git-team-exercises.md

***

### Hungry for More?
#### References
- [Git Cheat Sheet](https://raw.githubusercontent.com/ATL-WDI-Curriculum/local-and-remote-git/master/images/Git-Cheat-Sheet.png)
- [Github Pages](https://pages.github.com/) for our Personal Portfolios

#### Readings
- [Git Documentation](https://git-scm.com/documentation)
- [Forking on Github](https://help.github.com/articles/fork-a-repo/)
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)

#### Videos
- [Linus Torvalds (Creator of Linux and Git) on Git](https://www.youtube.com/watch?v=4XpnKHJAok8)



*COMMIT EARLY, COMMIT OFTEN!*
