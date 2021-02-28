const axios = require ("axios");

const bookController = {
 getBook : (req,res) => {
    const BookTitle= req.params.BookTitle;
    const ApiURL="https://www.googleapis.com/books/v1/volumes?q="
    axios.get(ApiURL+title)
    .then(results => {
        results.json(results.data)
        console.log(results.data);
    })
    .catch((err)=>{
        console.log(err);
    });
 }
};

module.exports = bookController
