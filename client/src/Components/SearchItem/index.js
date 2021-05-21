import React, {useState} from 'react';
import "./style.css";

//very important on how to pass the function value to the parent using React Hooks .. RDiaz May/21

const SearchItem = ({SearchBook}) => {
    //adding hooks to have control of the button or search icon 
    const [title, setTitle] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        //now we send the variable captured to the parent passing the title we type 
        SearchBook(title);
        //with this we clear the search bar after each search 
        setTitle("");
    }
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            {/* Note: we need to declare the initial "value "  and then set the hook using the onChange to create the binding */}
        <input className="form-control form-control-sm mr-3 w-5 mycity" value={title} id="citySelect" type="text" placeholder="Desired Title" onChange={(e)=>setTitle(e.target.value)}  aria-label="Search"  />
                                {/* this one is just to add the magnifier glass icon and make the call to handle submit , with this our form reacts to enter when the magnifier glass is clicked */}
                                <a href="#" id="search" type="submit" onClick={handleSubmit} > <i className="fas fa-search" aria-hidden="true"></i></a>
                        </form>
    )
}

export default SearchItem

