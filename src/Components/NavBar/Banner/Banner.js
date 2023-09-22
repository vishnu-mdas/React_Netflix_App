import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log(response.data.results[0]);

   // Get the response data
   const results = response.data.results;

   // Generate a random index within the range of available movies
   const randomIndex = Math.floor(Math.random() * results.length);

   // Set the random movie using the random index
   setMovie(results[randomIndex]);

      //  setMovie(response.data.results[3])
    })
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner '>
        <div className='content'>
          <h1 className='title'>{movie ? movie.title:" "}</h1> 
          <div className='banner_buttons'> 
          <button className='button'>Play</button>
          <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview: ""}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner