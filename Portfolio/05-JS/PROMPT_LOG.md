I used ChatGPT mainly to understand the JavaScript exercises and the parts that were a little confusing. I kept the original structure and comments, then adjusted the code myself and tested the examples.

---

# Prompt 1:

How do the clock hands use radians, and how can I draw all twelve numbers without changing the original structure?

## AI suggestion:

Use a loop from 1 to 12. Convert each number to an angle with `number * Math.PI / 6`, and convert the hours, minutes, and seconds to angles before drawing each hand.

### My modifications:
I kept the original clock functions and added the missing loop for the numbers and the angle calculations for the hands.

---

# Prompt 2:

Can you explain how the Fibonacci function, the `memo` object, and `"use strict"` work in this code? Also, should the value come only from the input?

## AI suggestion:

Use the input value for the calculation. The `memo` object stores results that were already calculated, and `"use strict"` helps catch common JavaScript mistakes.

### My modifications:
I kept the original Fibonacci structure and made the page read the number from the input, while keeping the console test.

---

# Prompt 3:

How can I make the image move with the buttons and bounce back when it reaches the canvas edges?

## AI suggestion:

Change `speedX` and `speedY` when a button is clicked. After updating the position, check the four canvas edges and reverse the speed when the image touches one.

### My modifications:
I kept the original component and movement functions and only added the missing speed changes and boundary checks.

---

# Prompt 4:

Can you explain the prime factor code step by step, especially the `%` operator, the `while` loop, and why the number is divided after finding a factor?

## AI suggestion:

Test possible factors starting at 2. When the remainder is zero, save the factor and divide the number by it. Repeat with a `while` loop so repeated factors are included.

### My modifications:
I used the explanation to understand the existing function and completed the factor search without changing the main structure.

---

# Prompt 5:

How does the Pig Latin code find the first vowel, move the beginning consonants, and keep multiple words separated?

## AI suggestion:

Split the sentence into words, find the first vowel in each word, move the beginning consonants to the end, add `ay`, and join the words with spaces.

### My modifications:
I kept the original arrays and loops, then completed the word transformation and connected the result to the page.
