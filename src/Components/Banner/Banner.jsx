import React, { useEffect, useState } from 'react'
import {API_KEY, imgUrl} from '../../constants/constants'
import axios from '../../axios'   //to fetch data
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  
  }, [])   //hook is set to run once after the initial component rendering, as it has an empty dependency array
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}} //backdrop_path to create the URL for the background image
    className="banner">
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom">
        
      </div>
    </div>
  )
}

export default Banner