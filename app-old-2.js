const express = require('express');
const app = express();

const port = 4000;

// Serve static content. This replaces the path '/'. Always search for 'index.html' file.
app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    // res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`App running on port ${port}`);
});