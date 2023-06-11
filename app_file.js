const express = require('express');
const app = express();
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/topic/new', (req, res) => {
    res.render('new');
})

app.post('/topic', (req, res) => {
    res.send('Hi, post');
})

app.listen(3000, () => {
    console.log('Connected, 3000 port!');
})
