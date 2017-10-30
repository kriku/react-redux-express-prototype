var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gas');

var db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));
db.once('open', function() {

})
