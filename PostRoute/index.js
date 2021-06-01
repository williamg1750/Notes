const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');
//an npm packaget hat give unique ids
//copied from the npm docs as is
//const { v4: uuidv4 } = require('uuid');
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
//renamed  uuidv4 to just uuid easer to use
//uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const { v4: uuid } = require('uuid');

//this basically is a middelware taht parses thru reqbody as urlencoded data other wise it would be undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//this basically sets the absoulte path
app.set('views', path.join(__dirname, 'views'));
//need to use inorder to use EJS
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'william',
    comment: 'bonkgang',
  },
  {
    id: uuid(),
    username: 'fandy',
    comment: 'my heart hurts',
  },
  {
    id: uuid(),
    username: 'andy',
    comment: 'i love drama',
  },
  {
    id: uuid(),
    username: 'kenny',
    comment: 'what should i eat',
  },
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((current) => current.id === id);
  res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((current) => current.id === id);
  res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((current) => current.id === id);
  const newComment = req.body.comment;
  foundComment.comment = newComment;
  res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter((current) => current.id !== id);
  res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
  res.send('get/ tacos response!!!');
});

app.post('/tacos', (req, res) => {
  console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`order of ${qty} ${meat} tacos`);
});

app.listen(8080, () => {
  console.log('IM LISTENING TO PORT 8080');
});
