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

module.exports = mongoose.model('Book', BookScheema);