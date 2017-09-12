<!--
Creator: <Name>
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Git and GitHub

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Git is the industry standard tool for version control. That is, when you write code, git helps you track all of the changes that you've made over time to ensure that no work is lost. GitHub is the tool that takes git and makes it collaborative. It helps you make sure that every developer's version of the code is the same between different computers. GitHub has also allowed unprecedented sharing of code and tools through the open source movement. You can freely access any code that somebody has made public and use it in your own projects.



### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- explain the uses of Git and GitHub for tracking their changes and collaborating on projects.
- draw a model of local, remote, and working copies of their repositories.
- write some code to improve their work, commit the changes, and write a strong commit message.
- deploy their first live website using gh-pages.

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- navigate the files in their computer using terminal
- create and save a basic HTML or CSS file.
- access GitHub with their own user account.

## Git and GitHub

You'll be using git and GitHub every day throughout this course (and as a developer in the industry) for version control. **Version control** is a system that records changes to a file or set of files over time so that you can recall specific versions later.

More specifically, **a version control system allows you to:**

* Review changes made over time
* Revert files (or an entire project) back to a previous state
* Collaborate on a project with other developers
* Track down the origin of bugs in the code
* Back up your projects on a remote server

**Git** is a version control system and **GitHub** is a social network built around git. It allows you to see and use other people's code, share your code, and gain insight into your repositories. GitHub provides great tools to track and interact with your codebase.

Git stores information about your project in a **repository** (often called a repo). A git repository holds the current version of your project's files, as well as the complete history of all past versions.

Your computer holds a **local repository**. It's a copy of all of the changes you've ever committed on your machine. GitHub holds a **remote repository**. It's a copy of all of the changes you've ever committed and pushed to the web.

### Describing the Workflow

When you're working, you are editing a working copy. You save it with `cmd` + `s` just as you've always saved documents on your computer. You should be saving **constantly**.

When you're ready to save a "state of the code", you need to add files to the staging area. First use `git status` to check which files you've edited since you last preserved the state of the code. Terminal will print for you a report of every file that you've saved, added, or deleted since you last committed.

Next, add individual files by saying `git add <file>` where <file> is the name of the file you want to save. Complete this one by one for every file you want to stage. Alternatively, if you know that you want to stage all of the files that have been edited (common case) use `git add .` - the `.` means *all* here. Again, use `git status` to see which files are staged and which aren't.

![image](https://cloud.githubusercontent.com/assets/6520345/17714071/f2b675d8-63b2-11e6-88b0-6a92d508c7e2.png)

Finally, commit your staged changes with `git commit -m "add a descriptive message here"`. The `-m` means *message* and gives you a place to add a commit message. If you forget the `-m` terminal will automatically open a text editor window for you to give a message. Your commit messages should be brief but descriptive. Aim for fewer than 10 words, but really describe what you achieved since your last commit. If it's easy to write a commit message, you're doing a good job breaking your work into smaller tasks and committing your work often. **COMMIT EARLY, COMMIT OFTEN!**

Once you're ready for your local commits to become available online, you need to push the code to the remote repository on GitHub, named `origin`. Start with another `git status` to see how many commits you've completed since you last pushed. Then use the command `git push origin master` to make the remote repo match your local repo.

![image](https://cloud.githubusercontent.com/assets/6520345/17714099/24641086-63b3-11e6-93f1-ffcfb5a60433.png)

### Visualizing the Workflow
<figure>
  <img src="https://www.git-tower.com/learn/content/01-git/01-ebook/en/01-command-line/04-remote-repositories/01-introduction/basic-remote-workflow.png" alt="Local and remote">
  <br>
  <figcaption>The table below has all of the key words from this diagram bolded. </figcaption>
</figure>

### Git Basics

| Action | Command |
| :--- | :--- |
| Create new git repository | `git init` |
| Copy (**clone**) an existing repository from the internet (remote) onto your computer (local)| `git clone <repo url>`|
| Check status of git repo | `git status` |
| Check differences since last commit | `git diff <filename>` |
| Add file to git repo (**stage** for commit) | `git add <filename>` |
| Add (**stage**) all edited files in the current directory | `git add .` |
| **Commit** (save) a version into the local repository | `git commit -m "message describing changes"` |
| **Push** commits to GitHub (remote repository) | `git push <remote> <branch>` |
| **Pull** commits from the remote repository | `git pull <remote> <branch>` |
| Show version history | `git log <filename>` |
| Get help with git commands | `git help <command>` |






### Check for Understanding

("Favorites" code-along activity)

## More ahead
- This is just the beginning of our interactions with git and GitHub. One important additional feature that we'll explore later is the capacity to have multiple branches. On each branch, you will work on a specific feature. When you've completed that feature you will merge the branch into the `master` branch of the project. You keep the `master` branch tidy and publish it. Other development branches are the place for experimentation.
- We'll also complete another workshop on collaborating in GitHub with the specific aim of making sure versions don't have conflicts - different changes to the same piece of code.

## Closing Thoughts
- This workflow has a lot of commands and procedure and will take a some practice to internalize. It's worth getting into your muscle memory.
- after this workshop, you should have a sense of the importance of git and GitHub, understand the workflow and the meanings of the git commands. You should be able to write code and commit it with a good commit message.
- Git and GitHub will be part of your daily routine every day you code. It's important to get to know it now. Comfort with git is a baseline skill that all companies look for in developers.
- Take a moment to see if you can, without looking at any other resources, handwrite the order of commands needed to commit your work and push it to GitHub. Include `git status`.
- How'd you do? ✊-5.

## Additional Resources
- [git, a simple guide](http://rogerdudler.github.io/git-guide/)
- [GitHub help's list of resouces](https://help.github.com/articles/good-resources-for-learning-git-and-github/)
- in terminal, `git help`
- [branching, which we'll cover later](https://guides.github.com/introduction/flow/)
