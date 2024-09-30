import React, { useContext, useEffect} from 'react'
import './Moviez.css'
import { Button, Card, Form } from 'react-bootstrap'
import axios, { } from 'axios'
import { imageUrl } from '../url'
import { Rate } from 'antd';
import { MovieContext } from '../App'
import { Link } from 'react-router-dom'


function Moviez({ title, tmdbapi }) {
  
  const {Films, setFilms, setMovieId,setShowHead,SearchText,setShowBanner,setSearchText} = useContext(MovieContext)

  useEffect(() => {
    axios.get(tmdbapi).then((res) => {
      setFilms(res.data.results);

    })
    setShowHead(true)
    setShowBanner(true)

  }, [tmdbapi,setFilms,setShowHead,setShowBanner,setMovieId])


  const getMovieId = (id) => {
    
    setMovieId(id)

  }
  
  const getSearchValue=(e)=>{
    setSearchText(e.target.value);
  }
 

  return (
    <>
  <div className="search">

      <Form >
      
            <Form.Control
              type="search"
              placeholder={"Find "+title}
              className="search-input"
              aria-label="Search"
              onChange={getSearchValue}
              
              />
              
            
          </Form>
         
            
  </div>
    <div className='row'>

      
        
      {Films.filter((Filim)=>{
        const SearchString=SearchText && typeof SearchText === 'string' ? SearchText.toLowerCase() :"";
        return SearchString === "" ? Filim : (Filim.title && Filim.title.toLowerCase().includes(SearchString))
      }).map((film) => {
        return (

          <Card className='cards' key={film.id} style={{ width: '18rem' }}>
            <Card.Img className='card_image' variant="top" src={imageUrl + film.backdrop_path} />
            <Card.Body>
              <Card.Title>{film.title}</Card.Title> 
              <Card.Text>
                {film.release_date}
                <br />
              <Rate disabled defaultValue={film.vote_average - 3} />
              </Card.Text>
              <Link to={'/details'}>
              <Button className='detail-btn' onClick={() => getMovieId(film.id)} variant="primary">Watch</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      })}

    </div>
    </>
  )
}

export default Moviez