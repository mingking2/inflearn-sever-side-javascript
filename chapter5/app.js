const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello home page!');
})

app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/route.png">')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login please</h1>');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})