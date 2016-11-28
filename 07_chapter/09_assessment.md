**WDI Fundamentals Unit 7**

---

# Git and GitHub Preparation

In order to share our memory game publicly and turn in the assignment, you will need to access code that is located on GitHub's servers. Follow these instructions to get started:

## Exercise

#### Requirements

- Create a GitHub account.
- Fork the "WDI Fundamentals Memory Game" repository.
- Clone your fork locally.

#### Below are the steps for completing the assignment:

1) If you don't have one already, [create an account](07_exercise.md) on GitHub.com.

2) Go to [this address](https://github.com/ga-students/wdi-fundamentals-memorygame) to find the repository containing the existing code. Once you're there, click the button that says "Fork." This will create a copy of the original repository under **your** GitHub account.

3) Take a look and confirm that you now have a copy of `wdi-fundamentals-memorygame` in your list of repositories.

4) Open your fork of the repo (Note that GitHub lists your repo as a fork of the original repository).

  ![Image showing "forked from ga-students/wdi-fundamentals-rps"](../assets/chapter2/clone_ga-students.png)

5) Find the clone URL listed on this page, and copy it to your clipboard.

  ![Image showing "clone HTTP address"](../assets/chapter2/clone_http.png)

6) Open up the terminal application on your computer, and navigate to the `fundamentals` directory within your home directory. Once there, run the following Git command from the command line:
<br>
`git clone https://your/clone/url` (substituting the clone URL you copied above)
<br>
  This will copy your forked repo from GitHub to your computer so that you can work on it locally.

7) If you've followed these directions correctly, you should have a repository in your `fundamentals` folder called `wdi-fundamentals-memorygame`. This repository contains three folders and a couple of other files. For this project, the ONLY file we're expecting you to edit is `main.js` - it can be found at `wdi-fundamentals-memorygame/starter-code/main.js`.

---

And that's it for awhile! We'll be coming back to this project at the end of every chapter, but now it's time to move on to [Unit 8](../08_chapter/intro.md).
