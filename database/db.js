
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/api-node-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise; 

module.exports = mongoose;