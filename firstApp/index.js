const express = require('express');
const app = express();

// console.dir(app);

// app.use((req, res) => {
//   // console.log('We got a new request');
//   // console.log('........Req', req);
//   // console.log('........Res', res);
//   // res.send('Hello we got ur request. this is the response');
//   res.send({ color: 'red' });
// });

// '/'   this is the root or home what ever u want to call it
app.get('/', (req, res) => {
  res.send('THIS IS THE HOMEPAGE!');
});
//cats
app.get('/cats', (req, res) => {
  res.send('MEOWw');
});
//dogs
app.get('/dogss', (req, res) => {
  res.send('WOOF!');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`THIS IS A ${subreddit} SUBREDDIT!`);
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>NOTHING FOUND IF NOTHING SEARCHED!!!!</h1>`);
  }
  res.send(`<h1>Search results for ${q} </h1>`);
});

//the catch all
//this must be on the bottom orelse the other request are going to be ignored
app.get('*', (req, res) => {
  res.send('404 Routes doesnt exist');
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
