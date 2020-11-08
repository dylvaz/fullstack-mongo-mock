// Controller here
// complete building out the controller
var Product = require('../db/');

const controller = {
  get: (req, res) => {
    Product.find({})
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        console.error(err);
      });
  },
  post: (req, res) => {
    Product.create(req.body)
      .then(() => {
        res.status(200).send('Succesfully Posted 🎉');
      })
      .catch(err => {
        console.err(err);
      });
  },
  put: (req, res) => {
    let { _id } = req.body;
    Product.updateOne({ _id }, { $set: req.body })
      .then(() => {
        res.status(200).send('Succesfully Updated 🎉');
      })
      .catch(err => {
        console.error(err);
      });
  },
  delete: (req, res) => {
    let { _id } = req.params;
    Product.deleteOne({ _id })
      .then(() => {
        res.status(200).send('Succesfully deleted 🎉');
      })
      .catch(err => {
        console.error(err);
      });
  }
};

module.exports = controller;