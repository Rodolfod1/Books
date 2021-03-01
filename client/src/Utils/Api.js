import axios from "axios";

const Api = () => {
    getBook = (BookTitle) =>{
        //call to backend routes 
        return axios.get("/api/results/" + BookTitle)
    }
 
}

export default Api
