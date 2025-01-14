# Unhandled Promise Rejection in Express.js
This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  Asynchronous operations within request handlers can throw errors that aren't properly caught, resulting in application crashes or unexpected behavior.  This example shows the problem and its solution.

## Problem
The `bug.js` file contains an Express.js server with an asynchronous operation (`doSomethingAsync`) that might throw an error.  The error handling is insufficient, leading to an unhandled promise rejection.  Running this code will likely result in a warning or even a crash.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle promise rejections.  It uses a `process.on('unhandledRejection', ...)` event listener to catch unhandled rejections gracefully, log the error, and optionally perform other cleanup actions.

## How to run
1. Clone the repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to see the problematic behavior.
4. Run `node bugSolution.js` to see the solution in action.

This example highlights the importance of comprehensive error handling in asynchronous Node.js applications.