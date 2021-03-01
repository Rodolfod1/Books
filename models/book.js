const mongoose = require ('mongoose');

const BookScheema = new.mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author: {
        type: String 
    },
    poster: {
        type: String 
    },
    synopsis: {
        type: String
    }

});

const Book = mongoose.model('Book', BookScheema);
module.exports = Book;