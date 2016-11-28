**WDI Fundamentals Unit 8**

---

##Thinking Programmatically

Before you set out to write a program, it's important to understand how computers "think." Computers solve problems differently than you or me. They do not learn to perform tasks, but instead need detailed, step-by-step instructions every time.

The only knowledge a computer has is the knowledge we tell it.

If you're having friends over for dinner and would like to cook up a new dish, you'll most likely find an interesting recipe and follow the instructions step by step in order to prepare it.

Similarly, a **program** is a series of instructions that a computer can follow to achieve a goal.

**Programming** is the task of writing those instructions in a language that the computer can understand.


## Pseudocode

When we write a program, we need to figure out a way to translate the ideas in our heads into code.

**Pseudocode** is a way to plan out your program before writing its code. It is a detailed, step-by-step description of what a computer must do, expressed in plain English rather than in a programming language.

As tempting as it may be to jump right into a problem and start writing code, you'll find that taking a few minutes to focus on your approach will save you valuable time in the long run. During the planning process, you'll often think of scenarios you hadn't originally anticipated. As the old proverb goes, "Measure twice and cut once."

## Writing Pseudocode

Take, for example, a program that lets a player know whether or not he or she has passed the current level in a game. Pseudocode for this program might look like this:

```
passingScore = 150 points
get playerScore

if playerScore >= passingScore
	display message "Current level: Passed"
otherwise
	display message "Current level: Failed"

```

Again, the goal is to think through the problem and *break it down into simple steps*, which can then be written out in code. Because there are no formal rules as to how pseudocode should be written, each person's version will likely vary slightly. Indentation is often used to keep statements organized and grouped together.

As another example, perhaps we want to create a thermostat program that turns the heat on when the current room temperature dips lower than the target temperature.

```
get targetTemperature
targetTemperature = 72
repeat forever
  currentTemperature = get sensor reading
  if currentTemperature < (targetTemperature - 5),
    turn on heater
  if currentTemperature >= targetTemperature,
    turn off heater

```
We first need to have the user enter a target temperature (in this case, it's 72). Then, we will continually check to see if the current temperature dips lower than the target temperature by 5 or more degrees. If it does, we will turn on the heater. If the current temperature is greater than or equal to the target temperature, we will turn off the heater. It's as simple as that!

Breaking down problems in this fashion will likely seem a little challenging in the beginning. But, once you gain some practice, it will become second nature.

Many of the programs you'll be working on in the following chapters might seem a little daunting at first. Instead of trying to tackle a problem all at once, take a few minutes to think about the overall goal of the program, and then break that answer down into series of short instructions. It will be time well spent.

> **HINT** You could write pseudocode for your memory game! How would you get started? 

---

Now it's your turn. Practice writing pseudocode [with this exercise](03_exercise.md).
