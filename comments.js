// create webserver 
// create a server listening on port 3000
// create a route that listens to /comments
// when the route is hit, it should return a json object with the following data
// { comments: [{ username: 'Todd', comment: 'lol' }, { username: 'Jack', comment: 'ayy lmao' }]}
// create a route that listens to /form
// when the route is hit, it should return a form that takes in a username and a comment
// when the form is submitted, it should make a post request to /comments
// the post request should have the data { username: [username], comment: [comment] }
// once the post request is complete, it should redirect back to /form

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.json({
    comments: [
      { username: 'Todd', comment: 'lol' },
      { username: 'Jack', comment: 'ayy lmao' }
    ]
  });
});

app.get('/form', function(req, res) {
  res.send(`
    <form method="post" action="/comments">
      <input name="username" type="text">
      <input name="comment" type="text">
      <input type="submit">
    </form>
  `);
});

app.post('/comments', function(req, res) {
  console.log(req.body);
  res.redirect('/form');
});

app.listen(3000);