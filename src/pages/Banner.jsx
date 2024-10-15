import axios from 'axios'
import React, {useEffect, useState } from 'react'
import {imageUrl, latestMovies } from '../url'
import './Banner.css'
import { Rate } from 'antd';







function Banner() {
  const [Movies, setMovies] = useState([])
  
  
  let randomMovie = {}
  useEffect(() => {
    axios.get(latestMovies).then((res) => {
      setMovies(res.data.results);
    })
    




  },
   [setMovies])
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
          backgroundSize: "cover",height:'430px',width:"auto",backgroundRepeat: "no-repeat",border:"3px solid white"
        }}>
          
          <div className='Bannertext'>
            <p className='Bannerhead'>{randomMovie.title}</p>
            <h5 className='fw-bold'>2024</h5>
            <Rate disabled defaultValue={randomMovie.vote_average - 3} />
            <p className='Bannerdetail'>{randomMovie.overview}</p>
            
          </div>
         
        </div>
        
       

        </>
      )}
    </div>
  )
}

export default Banner