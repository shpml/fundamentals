**WDI Fundamentals Unit 2**

---

# File Systems

Before we tell our computer what to do, it's important we understand what it is we will be manipulating. You're probably used to seeing a graphical representation of files and folders as icons, either in a list or in columns.

![](assets/file-systems/file-system.gif)

The way your computer organizes and stores files is called a **file system**. Let's take a minute to learn the vocabulary developers use to talk about the **file system**.

* In programming speak, all folders are called **directories**.

![](assets/file-systems/directory.png)

* A directory within another directory is called a **subdirectory**.

* A directory that contains a subdirectory or file is called a **parent directory**.

![](assets/file-systems/subdirectories.png)

* The top-most directory of the file system is called the **root directory**. All files and directories are contained within the **root directory**, therefore they all share the same root.

![](assets/file-systems/root-directory.png)

For the purposes of this lesson, the root directory of everything on your computer is your **home directory**. It's aptly represented in the GUI by a house icon (if you're using a Mac, that is).

![](assets/file-systems/home.png)

---

We know how file and directories appear in the GUI. Now, let's find our way around this system in the command line.

Before we get started, it's important to point out that, as smart as they seem, computers can't actually think for themselves. To ask for a specific directory or file in the command line, we need to write out a precise address (called a **path**) so that the computer knows exactly where to find it.

For example, if you Google directions to "Main Street" without any additional information, Google wouldn't know which of the 10,466-plus Main Streets you want. Google might venture a guess, but your command line isn't as smart.

So, we have to be more specific when interacting with our computer in the command line.

Your computer understands two kinds of addresses or paths: absolute and relative.

* An **absolute path** starts from the root directory. It's analogous to identifying a location on Earth by its latitude and longitude. The point represented by (0, 0) is somewhere out in the middle of the Atlantic Ocean. This (0,0) point never changes — it is a standard reference point, or "the root," from which we describe all locations on Earth. If someone gave you the coordinates for a street in Paris, theoretically, you could start at (0, 0) and make your way north and east until you get there. **In this case, you are defining where you're going from the root, so you're using an absolute path.**

* On the other hand, if you were standing on a street corner in Anchorage, Alaska, and wanted to head to the library, you wouldn't need its latitude and longitude. You could just jump in a taxi and say, "Please head back two blocks, cut over to 3rd, and then turn right on Main Street." **In this case, you're defining where you're going based on your current location, so you're using a relative path.**

>**Caution** It's important to know where you're working from so that you know whether to communicate with your computer using absolute or relative paths.

---

[Feeling good? Move onto the next lesson.](navigating-the-command-line.md)
