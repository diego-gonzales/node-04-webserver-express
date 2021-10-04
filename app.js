const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Serve static content. This replaces the path '/'. Always search for 'index.html' file.
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Diego Gonzales',
        title: 'Home'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Diego Gonzales',
        title: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Diego Gonzales',
        title: 'Elements'
    });
});


app.listen(port, () => {
    console.log(`App running on port ${port}`);
});