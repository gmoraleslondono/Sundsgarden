Task

Hi Team,
Here is your first task for this week. I think we had a great start last week and I am so excited to get you all going and see you struggle and succeed! Here is an introduction to Typescript. On Thursday is another video and next week we will look at Typescript in React. We start with Typescript in the frontend, which will help you to see connections and gain an understanding. We really want to build upon your previous knowledge. When we get to the backend, it will be easier to add Typescript there too. Enjoy the video!

https://www.youtube.com/watch?v=GQHiJpR6s08

Task Description: Convert JavaScript to TypeScript

Objective:
Convert a simple JavaScript application into TypeScript. This task will help you practice adding types to variables and functions.

Files Provided:
index.html – This file contains the structure of our web page with a counter display and buttons.
app.js – This file contains the JavaScript code for the counter app.
Instructions:
Download and Unzip:

Download the zip file that contains index.html and app.js.
Convert the JavaScript Code to TypeScript:

Create a new file named app.ts.
Convert the JavaScript code from app.js to TypeScript.
Add Basic Types:
Add type annotations for variables like count.
Add types for function parameters and return values.
Update JavaScript References:

Make sure the index.html file uses the new app.js file generated from app.ts.
Compile TypeScript:

Use the TypeScript compiler to convert app.ts into app.js. Replace the old app.js file with this newly compiled file.
Zip and Submit:

Create a new zip file containing:
index.html
app.js (compiled from app.ts)
app.ts
Submit this zip file back to me.
Details to Check:
Variable Types: Ensure variables like count are typed as number.
Function Types: Functions like increment, decrement, and reset should have types indicating they return void (nothing).
Basic Type Annotations: You don’t need to worry about more advanced TypeScript features like HTMLElement. Focus on basic type annotations.
Example:
If you see a function like this in app.js:

const increment = () => {
count += 1; updateCountDisplay(); };
In app.ts, it should look like this:

const increment = (): void => {
count += 1; updateCountDisplay(); };
Helpful Tips:
Basic Types: Use number for numeric values and void for functions that do not return anything.
Casting Types: For now, you don’t need to use advanced type casting. Stick to basic type annotations.
Extra:

If you want to add Typescript to any of your own project, go for it and share them with me!!!

If you have any questions, feel free to ask. Good luck!
