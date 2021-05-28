const express = require('express');
const app = express();
const path = require('path');
//sets the views to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

const redditData = require('./data.json');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { random: num });
});

app.get('/cats', (req, res) => {
  const cats = ['blue', 'red', 'green', 'grey', 'orange'];
  res.render('cats.ejs', { cats });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit.ejs', { ...data });
  } else {
    res.render('notfound', { subreddit });
  }
});
// app.get('*', (req, res) => {});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
