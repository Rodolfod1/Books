const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
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
    },
    link :{
        type: String 
    },
    id: {
        type: String
    }

});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;