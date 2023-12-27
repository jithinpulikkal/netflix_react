import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {  API_KEY, imgUrl } from '../../constants/constants'


function RowPost(props) {
  const [movies, setMovies] = useState([]) // movie array
  const [urlId, setUrlId] = useState()     // youtube video id
  useEffect(() => {
    axios.get(props.url).then((response)=>{  //request with api endpoint
      console.log(response.data);
      setMovies(response.data.results)
    })
  })

  const opts = {
    height : '390',
    width : '100%',
    playerVars : {
      autoplay : 1,
    },
  }

  const handleMovie = (id)=> {
    console.log(id);

    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{  //get related videos
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])      //set first video result
      }else{
        console.log("array empty");
      }
    })
  }
  
  return (
    <div>
      <div className='row'>
          <h2>{props.title}</h2>
          <div className="posters">
            {movies.map((obj)=>
              <img
              onClick={()=> handleMovie(obj.id)} 
              className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl+obj.backdrop_path}`} alt=""/>
            )}
          </div>
          { urlId &&  <YouTube opts={opts}  videoId={urlId.key} />} 
          {/* youtube video rendering */}
      </div> 
      
    </div>
  )
}

export default RowPost