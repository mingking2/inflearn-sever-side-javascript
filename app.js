const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/template', (req, res) => {
  res.render('temp');
})
app.get('/', (req, res) => {
  res.send('Hello home page!');
});

app.get('/dynamic', (req, res) => {
  var lis = '';
  for(var i=0; i<5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      Hello, Dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
  </body>
  </html>`;
  res.send(output);
});

app.get('/route', (req, res) => {
  res.send('Hello Router, <img src="/route.png">')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login please</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})