var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://victor:victor@ds147711.mlab.com:47711/todos');

module.exports = {mongoose};
