**WDI Fundamentals Unit 2**

---

# Version Control

When you're working on a project – say a painting, a piece of software or an autobiography – there comes a time when you wish you had a reset button.

You might already have a system in place to deal with this problem – maybe you save your document multiple times with different names, so that you can return to a different stage of the project.

![](assets/version-control-and-git/version-control.gif)

Developers call this process "version control."

If you're making copies of a file every time you make a change, your file system might look like this:

<br>

![](assets/version-control-and-git/bad-version-control.png)

<br>

While this method works (kinda), it has a number of major limitations.

* It only allows you to track changes in one file; if your project consists of multiple files, you're out of luck.
* It's extremely duplicative - before long, you might end up with 10, 20, or even 50 slightly-different copies of the same file.
* It's extremely difficult (if not basically impossible) to see what has changed from one version to the next without opening each file and comparing changes line by line.
* Keeping track of parallel versions (revision A vs revision B) is possible, but it's hard to compare one to the other, and integrating the two versions is a lot of work.

Now imagine how much more complicated this process becomes once you start working with a team...

Software developers have developed a number of tools to solve the "version control" problem for their own projects; in this course, we will focus on one particularly popular version control program called **Git**. Git addresses all of the problems mentioned above:

* Git tracks changes for multiple files by keeping them all in **repositories** - special directories with some hidden Git machinery.
* Rather than saving entire separate versions of each file, Git keeps a record of the *changes* that have been made to each file - much more space-efficient.
* Because Git stores changes, rather than whole files, looking at what's changed from one iteration to the next is very easy.
* Git allows you to easily keep track of parallel versions of a project using a feature called **branching**. We won't cover this feature now, but you'll be using it a lot once you start the course.

Git is also an excellent tool for working collaboratively on a project, though we won't be using those features right away.

# Installing Git

If you don't already have Git, you can install it by downloading the latest release from [git-scm.com](http://git-scm.com/download/mac), double-clicking the downloaded file, and going through the installer.

If you're following along on Windows and installed Git Bash, Git should have been installed along with Git Bash so you should be all set.

> **HINT** As with any software installation, it's always good to backup your system and data before proceeding.

You can check to see if it worked by opening up the terminal and typing:

```
$ git --version
```

This will show you what version of Git is running; your computer should return something greater than or equal to `2.10.1`:

![](assets/version-control-and-git/git-installed.gif)

---

[On to the next lesson.](track-changes-with-git.md)
