const db = require("../models");

// Defining methods for the DbBookController  
// important to remember ***
// The ID described here it is the objectID on mongo DB
module.exports = {
  findAll: function(req, res) {
    db.Book
    .find(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
    .findById(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    
    db.Book
    .create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },

  // remember to parse the objectID from mongo DB
  update: function(req, res) {
    db.Book
    .findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
     db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};