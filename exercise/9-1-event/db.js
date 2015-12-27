var mongoose = require('mongoose');

// mongoose.connect('mongodb://username:password@the.server.com/databaseName')
mongoose.connect('mongodb://localhost/test');

module.exports = mongoose.connection;