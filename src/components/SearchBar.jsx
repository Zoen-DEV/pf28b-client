import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMangaByTitle } from "../redux/Actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [order, setOrder]= useState('');

    function handleChange(e){
        e.preventDefault()
        setTitle(e.target.value)
    }

  
    function handleSubmit(e){
        e.preventDefault()
        if(title !== ''){
            console.log('entro al handleSubmit')
            dispatch(getMangaByTitle(title))
            setTitle('')
            setOrder(`Sorted: ${e.target.value}`)
            navigate('/mangas')
        } else {
            alert('Please enter a manga title')
        }
    }

    return (
        <div className="searchbar_container">
            <input
            className='inputsearch'
            type = "text"
            value = {title}
            placeholder='Search...'
            onChange={(e)=>handleChange(e)}
        />
            <button className='btnsearch' type='submit' onClick={(e) => handleSubmit(e)}><i className="bi bi-search"></i></button>
        </div>
    )
}

export default SearchBar;