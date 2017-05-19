var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

// POST new Todo
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// List all todos
app.get('/todos', (req, res) => {
  Todo.find().then((docs) => {
    res.send({docs});
  });
});

// fetch specific todo by id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('ID INVALIDE');
  }

  Todo.findById(id).then((match) => {
    if (!match) {
      return res.send('ID NON TROUVE');
    }
    res.send({match});
  }).catch((e) => {
    return res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
