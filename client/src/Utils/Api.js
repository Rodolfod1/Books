import axios from "axios";


    export default{
  

     getBook : BookTitle => {
    //     //call to backend routes 
      return axios.get("/api/gApi/" + BookTitle)
     },

    //get all stored books on the database 
     getSavedBooks :  () =>{
        axios.get("/api/Books")
    },

    //saves books on the database 
     saveBook : (BookData) =>{
        axios.post("/api/Books", BookData);
    },

    // removes book from database 
     deleteBook : (id) =>{
        axios.delete("/api/books/" + id)
    }
 }


