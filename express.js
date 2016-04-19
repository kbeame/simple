const express = require('express');
const app = express(); // app is a callback function

app.get('/something', (req, res) => {
  res.status(200).json({msg: 'hello world'}); // I tend to use .send when sending text and .json when sending
  // json
});

app.get('/*', (req, res) => {
  res.status(200)..json({msg: 'hello mooooooose'});
})

app.get('/greet/:name', (req, res) => {
  res.status(200).json({msg: 'hello ' + req.params.name})
})

app.listen(3000, () => console.log('Server...ITS ALIVE'));

//the first thing that matches is the one that gets called.
