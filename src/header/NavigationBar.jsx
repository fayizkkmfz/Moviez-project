import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

function NavigationBar() {
    
  return (
    <div>
        <Navbar className='navbar' bg="" data-bs-theme="dark">
        <Container>
        <Link className='title' to={"/"}>MOVIEz</Link>
          
         <div>
           <Link className="headings" to={"/popular"}>Popular</Link>
          
          <Link className="headings" to={"/thriller"}>Thriller</Link>
          <Link className="headings" to={"/comedy"}>Comedy</Link>
          </div> 
          
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar