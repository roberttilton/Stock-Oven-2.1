const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find({})
      .sort({ date: -1 })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("controller - create: ", req.body);
    db.User
      .create(req.body)
      .then(dbResults => {
        // res.redirect(307, "/login");
        res.json(dbResults);
      })
      .catch(err => res.status(401).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbResults => dbResults .remove())
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  }
};