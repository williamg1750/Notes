const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

// app.get('*', (req, res) => {});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
