import React from 'react'
import {  Navbar } from 'react-bootstrap'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

import { GiFilmProjector } from "react-icons/gi";
import { GiFilmStrip } from "react-icons/gi";


function NavigationBar() {
  
  

  
    
  return (
    
    <div >
      
        <Navbar className='navbar'>
        
        
        <GiFilmProjector className='film-icon' />
        <Link className='title' to={"/"}>MOVIEz</Link>   
        
         <div className='link-div'>

           <Link className="headings" to={"/popular"}>Popular</Link>
           <GiFilmStrip className='movie-icon'/>

          <Link className="headings" to={"/thriller"}>Thriller</Link>
          <GiFilmStrip className='movie-icon'/>
          <Link className="headings" to={"/comedy"}>Comedy</Link>
          </div> 
        
      </Navbar>
    </div>
  )
}

export default NavigationBar