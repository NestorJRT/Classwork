I used ChatGPT to understand how Node.js runs JavaScript outside the browser and how modules and file paths work. The explanations helped me connect the installed packages and the local text file to the output printed in the terminal.

---

# Prompt 1:

What changes when this file runs with Node.js instead of inside a browser, and why are `require` and `console.log` available here?

## AI suggestion:

Node.js provides a runtime for JavaScript outside the browser. In this CommonJS project, `require` loads modules and `console.log` writes output to the terminal.

### My modifications:
I kept the script as a small Node.js program and used terminal output to inspect each result.

---

# Prompt 2:

Why does `require('star-wars-quotes')` return something I can call like a function, while the superhero packages are destructured to get named functions?

## AI suggestion:

Each package decides what it exports. The quotes package exports a callable function, while the superhero packages expose named exports such as `randomSuperhero` and `randomSupervillain`.

### My modifications:
I followed each package's export shape: called the quotes function directly and called the named random-character functions to build the sentence.

---

# Prompt 3:

How does `__dirname` help `fs.readFileSync` find `input.txt`, and why is that more reliable than using only the filename?

## AI suggestion:

`__dirname` is the absolute directory of the current script. Joining it with `input.txt` makes the path independent of the terminal's current working directory.

### My modifications:
I used a path based on `__dirname` and read the file as UTF-8 so the text appears as a string in the terminal.

---

# Prompt 4:

What is the difference between synchronous and asynchronous file reading, and what tradeoff does `readFileSync` make in this short exercise?

## AI suggestion:

A synchronous read pauses the program until the file is read. That keeps this tiny example easy to follow, while asynchronous reading is usually preferable when a server should continue handling other work during file I/O.

### My modifications:
I kept the synchronous method because this is a short command-line exercise that prints the file contents immediately.

---

# Prompt 5:

Why does `npm install` put packages in `node_modules`, and how do `package.json` and the lock file help someone else run the same project?

## AI suggestion:

`package.json` records the project's dependencies and their version ranges. The lock file records the resolved dependency tree, while `node_modules` contains the installed package code.

### My modifications:
I kept the dependency declarations and lock file with the project so the required packages can be installed again without committing the installed package directory as source code.
