// Create web server
// run the server with node comments.js
// open browser and navigate to http://localhost:3000/comments
// you should see the text 'Hello World' show up in the browser

// create webserver
const express = require('express');
const app = express();
const port = 3000;

// create a path that will return a response
app.get('/comments', (req, res) => {
    res.send('Hello World');
});

app.get('/comments/:id', (req, res) => {
    res.send(`The id is: ${req.params.id}`);
});

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
