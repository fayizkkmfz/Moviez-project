import React, { useContext } from 'react'
import { MovieContext } from '../App'
import { imageUrl } from '../url';
import './Details.css'
import { Rate } from 'antd';
import { FaCirclePlay } from "react-icons/fa6";
import { LuBookmarkPlus } from "react-icons/lu";


function Details() {
  const { MovieId, Films, setShowHead } = useContext(MovieContext)
  const clickedMovie = Films.filter(film => film.id === MovieId)
  const selectedmovie = (clickedMovie[0]);
  console.log(selectedmovie);
  setShowHead(false)

  return (
    <div className='d-flex bg-dark'>
      <div className='imagesection'>
        <img className='image' src={imageUrl + selectedmovie.backdrop_path} alt="" />

      </div>
      <div className='detailsection'>
        <h1>{selectedmovie.title}</h1>
        <Rate disabled defaultValue={selectedmovie.vote_average - 3} />
        <p>{selectedmovie.overview}</p>
        <p>Released Date : {selectedmovie.release_date}</p>
        <p>Popularity : {selectedmovie.popularity}</p>
        <div className='Banner_btn' style={{marginLeft:"85px"}}>
          <button className='play_btn'>Play <FaCirclePlay /></button>
          <button className='add_btn'>My list <LuBookmarkPlus /></button>
          </div>
      </div>
    </div>
  )
}

export default Details