import axios from "axios";


    export default{
  

     getBook : BookTitle => {
    //     //call to backend routes 
    console.log("calling external api");
      return axios.get("/api/gApi/" + BookTitle)
     },

    //get all stored books on the database 
     getSavedBooks :  () =>{
        return axios.get("/api/Books")
    },

    //saves books on the database 
     saveBook : (BookData) =>{
        //  console.log("requesting");
        //  console.log(BookData);
        return axios.post("/api/Books", BookData);
    },

    // removes book from database 
     deleteBook : (id) =>{
        //  console.log("attempting to delete "+id);
        return axios.delete("/api/Books/" + id)
    }
 }


