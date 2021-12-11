import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'

function Details() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        console.log ('-------in Use Effect Details')
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

   

    return (
        <main>
            <h1>Movie Details</h1>
           
           
            
        </main>

    );
}

export default Details;