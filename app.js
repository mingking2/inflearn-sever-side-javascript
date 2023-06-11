var express = require('express');
var app = express();
app.locals.pretty = true;
var port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/form',(req, res) => {
  res.render('form');
})

app.get('/form_receiver', (req, res) => {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
}) 

app.post('/form_recevier', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description)
})

app.get('/topic/:id', (req, res) => {
  // res.send(req.query.id+','+req.query.name);
  var topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...'
  ];
  var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.query.id]} 
  `
  // 시멘틱 url 쓸려면 params 안쓰면 query
  res.send(output);
})

app.get('/topic/:id/:mode', (req, res) => {
  res.send(req.params.id+','+req.params.mode);
})

app.get('/template', (req, res) => {
  res.render('temp', {time: Date(), _title: 'pug'});
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