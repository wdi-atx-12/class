# Git Haiku

**Pair Programming - 25 min**

#### Partner One

* On GitHub, [create a new public repo](https://github.com/new) called `cold_day`
* Add your partner as a collaborator to the repo so they can write to it
* `git clone` this repo to your local machine and `cd` into it
* Create a branch called **line_one** and switch to it with `git checkout -b`
* `touch` a new file called **git_haiku.txt** and `open` it
* Write the first line of the Haiku, save it, then `git add` and `git commit` the changes locally
* Switch to your **master** branch with `git checkout`
* `git merge` your **line_one** branch into **master**
* Use `git push` to push changes to GitHub

#### Partner Two

* Clone the repo using `git clone` and `cd` into it
* Run `git remote -v` to see the origin of this repo
* Run `git log` to see what work has already been done on this repo
* Create a branch called **line_two** and switch to it with `git checkout -b`
* `open` **git_haiku.txt**
* Write the second line of the Haiku, save it, then `git add` and `git commit` the changes locally
* Switch to your **master** branch with `git checkout`
* `git merge` your **line_two** branch into **master**
* Use `git push` to push changes to GitHub

#### Partner One

* `git pull` to get the latest updates from Partner Two
* Repeat steps to add **line_three** and push back to the GitHub repo

#### Partner Two

* `git pull` to get a copy of the final Haiku

## Inspiration

```
An old silent pond...
A frog jumps into the pond,
splash! Silence again.

Basho Matsuo
```

```
Autumn moonlight—
a worm digs silently
into the chestnut.

Basho Matsuo
```

Source: http://examples.yourdictionary.com/examples-of-haiku-poems.html
