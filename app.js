<<<<<<< HEAD
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fetch = require('node-fetch');
const app = express();


console.log(__dirname)
const directoryPath = path.join(__dirname, './public');
const viewPath = path.join(__dirname, './templates/views');
const partialPath = path.join(__dirname, './templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(directoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Marudhu'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'help'
    })
});

app.get('*', (req, res) => {
    res.status(404).send('Error page')
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'about'
    })
});



app.listen(3000, ()=>{
    console.log('server is up on port 3000');
=======
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fetch = require('node-fetch');
const app = express();


console.log(__dirname)
const directoryPath = path.join(__dirname, './public');
const viewPath = path.join(__dirname, './templates/views');
const partialPath = path.join(__dirname, './templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(directoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Marudhu'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'help'
    })
});

app.get('*', (req, res) => {
    res.status(404).send('Error page')
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'about'
    })
});



app.listen(3000, ()=>{
    console.log('server is up on port 3000');
>>>>>>> Initial commit
})