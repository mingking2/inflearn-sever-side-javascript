const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/topic/new', (req, res) => {
    res.render('new');
})

app.post('/topic', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    fs.writeFile('data/' + title, description, (err) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });

})

app.listen(3000, () => {
    console.log('Connected, 3000 port!');
})
