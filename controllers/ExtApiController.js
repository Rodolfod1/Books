// controller for external API - google books in this case. 

const axios = require ("axios");


const ExtApiController = {
 getBook : (req,res) => {
     console.log("call made");
     console.log(req.params.BookTitle);
    const BookTitle= req.params.BookTitle;
    const SearchParam1="&printType=books"
    const SearchParam2="&filter=ebooks"
    const SearchParam3="+intitle"
    const SearchParam4=" inauthor"

    const ApiURL="https://www.googleapis.com/books/v1/volumes?q="
    axios.get(ApiURL+BookTitle+SearchParam1)
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
