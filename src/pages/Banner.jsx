import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { War_movies, imageUrl } from '../url'
import './Banner.css'
import { FaCirclePlay } from "react-icons/fa6";
import { LuBookmarkPlus } from "react-icons/lu";



function Banner() {
  const [Movies, setMovies] = useState([])
  let randomMovie = []
  useEffect(() => {
    axios.get(War_movies).then((res) => {
      setMovies(res.data.results);
    })



  }, [])
  const randomindx = Math.floor(Math.random() * Movies.length)
  console.log(Movies);
  randomMovie = Movies[randomindx]
  console.log(randomMovie);

  return (
    <div>

      {randomMovie && (
        <>
        


        <div style={{
          backgroundImage: `url(${imageUrl}${randomMovie.backdrop_path})`,
          height: "70vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%"
        }}>
          
          <div className='Bannertext'>
            <p className='Bannerhead'>{randomMovie.title}</p>
            <p className='Bannerdetail'>{randomMovie.overview}</p>
            
          </div>
          <div className='Banner_btn'>
          <button className='play_btn'>Play <FaCirclePlay /></button>
          <button className='add_btn'>My list <LuBookmarkPlus /></button>
          </div>

        </div>
        
        </>
      )}
    </div>
  )
}

export default Banner