import React from 'react'
import Hero from "../Components/Hero"
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
             <Hero backgroundImage="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/08/p-1-90385380-google-shares-35-books-in-their-secret-design-library.jpg"  >   
             <h1> Welcome to My Book Search App </h1> <br/> <h4> Powered by Google Books </h4>
             </Hero>
             <button type="button" className="btn btn-primary btn-lg">
                 <Link className="links" to="/search">
                 <h1>Search Book</h1>
                     </Link> 
            </button>
             <button type="button" className="btn btn-primary btn-lg">  <Link className="links" to="/Books">
                 <h1>View Library</h1>
                     </Link> 
            </button>
             
             
             
      
        </div>
    )
}

export default Home
