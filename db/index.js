// build your database
const mongoose = require('mongoose');
const productSchema = require('./schema.js');
const mongoUri = 'mongodb://localhost/ebidProducts';
// allow use of es6 promises
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
.then(()=> {
  console.log('Connected to mongo, good luck 💞');
})
.catch(err => {
  console.error(err);
});

// Register the productSchema with Mongoose as the 'Product' collection.
module.exports = mongoose.model('Product', productSchema);
