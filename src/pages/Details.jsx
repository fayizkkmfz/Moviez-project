import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../App'
import { API_KEY, imageUrl } from '../url';
import './Details.css'

import { IoMdArrowDropdownCircle } from "react-icons/io";
import YouTube from 'react-youtube';
import axios from 'axios';


function Details() {
  const { MovieId, Films, setShowHead,setShowBanner } = useContext(MovieContext)
  const [SelectedMovie, setSelectedMovie] = useState({})
  const [YoutubeKey, setYoutubeKey] = useState()
  const [Rating, setRating] = useState()
useEffect(() => {
  const clickedMovie = Films.filter(film => film.id === MovieId)
  setSelectedMovie(clickedMovie[0]);
  console.log(SelectedMovie);
  setShowHead(true)
  setShowBanner(false)
 setRating(Math.floor(SelectedMovie.vote_average))
}, [Films,MovieId,SelectedMovie,setShowBanner,setShowHead])

  

  axios.get(`http://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=${API_KEY}`).then((res)=>{
    setYoutubeKey(res.data.results[0].key);
     
  })
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

console.log(Rating);

  return (
    <>
    <div className='bg-div'>
      <div className='imagesection'>
        <img className='image' src={imageUrl + SelectedMovie.poster_path} alt="" />

      </div>
      <div className='detailsection'>
        <h1 className='movie-title'>{SelectedMovie.title}</h1>
        <h5 style={{color:"green"}}>Language : {SelectedMovie.original_language}</h5>
        <p>{SelectedMovie.overview}</p>
        <p style={{color:"red"}}>Released Date : {SelectedMovie.release_date}</p>
        <p style={{color:"green"}}>Popularity : {SelectedMovie.popularity}</p>
        <h4 style={{marginTop:"40px"}}>Watch The Video <IoMdArrowDropdownCircle className='down-icon' /></h4>
      </div>
      
    </div>
    <div>
    <YouTube 
    videoId={YoutubeKey}
    opts={opts}
     />
</div>
</>
  )
}

export default Details