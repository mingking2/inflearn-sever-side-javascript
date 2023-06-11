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

app.get('/topic', (req, res) => {
    fs.readdir('data', (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics: files});
    })
})
app.get('/topic/:id', (req, res) => {
    const id = req.params.id;
    fs.readdir('data', (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        fs.readFile('data/'+id, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.render('view', {topics: files, title: id, description: data});
        }) 
    })


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
