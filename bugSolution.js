const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    console.error('Caught an error:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add your custom handling logic here, e.g., logging, alerting, etc.
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}