// controller for external API - google books in this case. 

const axios = require ("axios");

const ExtApiController = {
 getBook : (req,res) => {
     console.log("call made");
     console.log(req.params.BookTitle);
    const BookTitle= req.params.BookTitle;
    const ApiURL="https://www.googleapis.com/books/v1/volumes?q="
    axios.get(ApiURL+BookTitle)
    .then(books => {
        res.json(books.data)
        console.log(books.data);
    })
    .catch((err)=>{
        console.log(err);
    });
 }
};

module.exports = ExtApiController
