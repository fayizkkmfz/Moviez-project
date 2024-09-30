import React, { useContext } from 'react'
import './home.css'
import { MovieContext } from '../App'




function Home() {
  const {setShowBanner}=useContext(MovieContext)
  setShowBanner(false)
  
  return (
    <div className='homepage'>
        
    </div>
  )
}

export default Home