**WDI Fundamentals Unit 2**

---

# Controlling Files with Command Line 
#### Creating Files and Folders

We now know how to find our way around this mysterious world called the command line. Now, let's perform some lasting actions, such as creating some files and folders. Before we start, let's make sure that we are in our home folder like so:

```
$ cd ~
```

> **HINT** `~` (tilde) is a shortcut to refer to your home folder. This is the folder on your computer containing your `Downloads`, `Pictures`, and `Documents` folders. Each user on any given computer will have their own home folder.

The command above, regardless of where we are currently located, will take us to our
home folder.

Great! Now that we're in our home folder, let's create a file.

```
$ touch joke.txt
```

The `touch` command creates files for us — in this case, we made a file called `joke.txt`. If we try to `touch` a file that already exists, the file will not be overwritten.

Let's open `joke.txt` in our default text editor so we can write a joke in it. Can we do that from our command line? Of course!

```
$ open joke.txt
```

If you're following along using **Git Bash on Windows**, that command probably didn't work! Instead, you'll want to use the following command to open the file. To do so, just type the name of the file you want to open:

```
$ joke.txt
```

Your text editor should open up this file now. Go ahead and type in this hilarious joke:

```
A man walks into a bar. The other one ducks.
```

Now that you have a joke, save that file, quit your text editor application, and return to your command line.

Let's see what's inside our `joke.txt` file now.

```
$ cat joke.txt
```

There's our joke!

```
A man walks into a bar. The other one ducks.
```

We should probably make a folder called `funny_things` to hold this joke.

```
$ mkdir funny_things
```

The `mkdir` command is used to create a specified folder. If the specified folder already exists, it will not be overwritten.


#### Moving and Removing Things

Before we move on, let's navigate to our home folder.

```
$ cd ~
```

We made a folder for our joke called `funny_things` (You can check that it's
there by running the `ls` command). How do we move our `joke.txt` file into this
folder? If we were using Finder, we might use our mouse to drag and drop
`joke.txt` into `funny_things`. So, can we achieve the same action with our command
line? Of course!

```
$ mv joke.txt funny_things/
```

And, voila! Our hilarious joke has been moved, rightfully, into the `funny_things`
folder.

> The `mv` command moves specified files or folders to a specified destination.

This is the first time we've used a command that needed two pieces of
information, or two arguments. The first argument is "what to move," and
the second argument is "where to move it to."

>**Note** Notice how we specified that we were moving our `joke.txt` into `funny_things/`. The `/` on the end of our folder's name specifies that this is a folder, not a file! Without it, you may unexpectedly rename your `joke.txt` to a new file called `funny_things`!


Let's navigate to our `funny_things` folder and check its contents to make sure our command worked.

```
$ cd funny_things
$ ls
```

Copying files is similar to moving them. So, let's make a copy of our joke.

```
$ cp joke.txt joke2.txt
```

> The `cp` command is used to copy specified files or folders to a specified location.

After running this command, we have created a copy of `joke.txt` called `joke2.txt` in the same folder. In this case, notice how the second argument was a file name, not a folder
name. It turns out that the `mv` and `cp` commands are quite smart. When moving or copying
a file, if the second argument is a **folder**, the specified file is moved or
copied to that folder. If the second argument is a **file**, the file in the first argument
is moved or copied to a file with the file name specified in the second argument. Hence, when we copied
our joke, our file `joke.txt` was copied to another file called `joke2.txt`.

Perhaps we should make another folder inside `funny_things` called `jokes` and
put our joke in there. After all, we could have funny jokes, funny pictures, and much
more. In order to achieve this, we're going to follow a series of long-winded
steps so we may familiarize ourselves with some more useful commands.

First, we're going to get rid of our duplicate joke file.

```
$ rm joke2.txt
```

> The `rm` command, which stands for remove, deletes specified files
> from your computer. `rmdir` (remove directory) deletes specified folders
> if they are empty. **Be careful with these commands!** These actions
> do not move files to your Trash, where you can recover them. These
> actions **permanently remove** the specified files and folders. They are
> **irrecoverable**.

Now that all these copycat files are out of the way for good, let's make a `jokes`
folder and put our joke inside.

```
$ mkdir jokes
$ mv joke.txt jokes/joke.txt
```

If you are trying to copy or remove folders and not files, we need to add "an
option" to our command. Options are extra settings that we want to apply to our
commands. Options given to commands are always of the format `--word` or `-letter`.
As an example, let's try to copy our `jokes` folder.

```
$ cp -r jokes copy_of_jokes
```

> The `-r` option stands for "recursive" and must be applied to the `cp`
> command when copying folders.

This is because we not only want to copy the folder, we also want to
recursively copy the contents of that folder and the contents of any folders
inside.

The same principle applies when removing a folder with files. The `rm -r` command will remove all of a folder's content, as well as the folder itself.

```
$ rm -r copy_of_jokes
```

Note that the `mv` command does not need an `-r` option to move folders.

---

[Let's try practicing a bit more!](controlling-files-with-command-line-exercise.md)
