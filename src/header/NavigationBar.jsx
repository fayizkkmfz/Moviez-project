import React, { useContext, useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import { MovieContext } from '../App'

function NavigationBar() {
  const { setSearchText}=useContext(MovieContext)
  const [SearchValue] = useState()

  const getSearchValue=(e)=>{
    setSearchText(e.target.value);
  }
  const Searching=()=>{
    setSearchText(SearchValue);
    
  }
    
  return (
    <div>
        <Navbar className='navbar' bg="" data-bs-theme="dark">
        <Container>
        <Link className='title' to={"/"}>MOVIEz</Link>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={getSearchValue}
            />
            <Button variant="outline-success" onClick={Searching}>Search</Button>
          </Form>
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