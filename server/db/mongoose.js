var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://victor:victor@ds147711.mlab.com:47711/todos' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
