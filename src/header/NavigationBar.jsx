import React, { useEffect } from 'react'
import {  Navbar } from 'react-bootstrap'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import { VscThreeBars } from "react-icons/vsc";
import { GiFilmProjector } from "react-icons/gi";
import { GiFilmStrip } from "react-icons/gi";


function NavigationBar() {
  useEffect(() => {
    
  
  
  let togglebar = document.querySelector('.toggle-bar')
  let linkdiv = document.querySelector('.link-div')

  const addtoggleclass = ()=>{
    linkdiv.classList.toggle('is-active')
  }
  
  togglebar.addEventListener('click',addtoggleclass)
  
}, [])
  
    
  return (
    
    <div >
      
        <Navbar className='navbar'>
        
        <div className="logo">

        <GiFilmProjector className='film-icon' />
        <Link className='title' to={"/"}>MOVIEz</Link>   
        </div>
       
         <div className='link-div'>

           <Link className="headings" to={"/popular"}>Popular</Link>
           <GiFilmStrip className='movie-icon'/>
          <Link className="headings" to={"/thriller"}>Thriller</Link>
          <GiFilmStrip className='movie-icon'/>
          <Link className="headings" to={"/comedy"}>Comedy</Link>
          </div> 
          <VscThreeBars className='toggle-bar' />

      </Navbar>
    </div>
  )
}

export default NavigationBar