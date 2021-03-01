import axios from "axios";

const Api = () => {
    getBook = (BookTitle) =>{
        //call to backend routes 
        return axios.get("/api/gApi/" + BookTitle)
    },
    //get all stored books on the database 
    getSavedBooks = () =>{
        return axios.get("/api/Books")
    },
    //saves books on the database 
    saveBook = (BookData) =>{
        return axios.post("/api/Books", BookData);
    },
    // removes book from database 
    deleteBook = (id) =>{
        return axios.delete("/api/books/" + id)
    }
 };

export default Api
