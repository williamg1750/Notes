const express = require('express');
const app = express();

// console.dir(app);

app.use((req, res) => {
  // console.log('We got a new request');
  // console.log('........Req', req);
  // console.log('........Res', res);
  // res.send('Hello we got ur request. this is the response');
  res.send({ color: 'red' });
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
