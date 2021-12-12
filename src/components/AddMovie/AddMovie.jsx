import { TextField, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie(props) {
    //use existing reducer to add movies to the store
    const movies = useSelector (store => store.movies);
    ///logging all the movies in the store
    console.log ('in Movie Reducer Add Movie Page', movies);
    const dispatch = useDispatch();
    // local state set to empty object 
    const [addMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '', 
        genre_id: 0
    });
    
    ///this function is sending the dispatch to the root generator function
    const postMovie = () => {
        console.log (' in POST movie');
        dispatch ({
            type: 'POST_MOVIE',
            payload: addMovie
        });
    }

//need event handlers to handle each of the inputs being entered. 
    const handleMovieTitle  = (event)=>{
        console.log (' in handleMovieTitle:', event.target.value );
        setNewMovie({...addMovie, title: event.target.value});
        
      }

      const handleMovieImage = (event)=>{
        console.log (' in handleMovieImage:', event.target.value );
        setNewMovie({...addMovie, poster: event.target.value});
        
      }

      const handleDescription= (event)=>{
        console.log (' in handleDescription:', event.target.value );
        setNewMovie({...addMovie, description: event.target.value});
        
      }

      const handleGenre= (event)=>{
        console.log (' in handleGenre:', event.target.value );
        setNewMovie({...addMovie, genre_id: Number(event.target.value)});
        
      }
   
   

    return (
        <main>
            <h1>Add a Movie</h1>
           <TextField
           label="Add Movie Title" 
           defaultValue=""
           onChange ={(event)=>handleMovieTitle(event)}
           >
           </TextField>
           <TextField
           label="Add Movie Poster URL" 
           defaultValue=""
           onChange ={(event)=>handleMovieImage(event)}
           >
           </TextField>
           
           <textarea
           placeholder='Enter Movie Description'
           type = "text"
           onChange ={(event)=>handleDescription(event)}
           >
            </textarea>
            <select name="genre" id ="genre" onChange={(event)=>handleGenre(event)}>
            <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space Opera</option>
                <option value="13">Superhero</option>
            </select>
           
           
           
            {/* send new movie to the store with dispatch  */}
           <Button
           onClick={postMovie}
           >
           Add New Movie
         
           </Button>
            
        </main>

    );
}

export default AddMovie;