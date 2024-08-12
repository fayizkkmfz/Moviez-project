import React, { useContext, useEffect} from 'react'
import './Moviez.css'
import { Button, Card } from 'react-bootstrap'
import axios, { } from 'axios'
import { imageUrl } from '../url'

import { MovieContext } from '../App'
import { Link } from 'react-router-dom'


function Moviez({ title, tmdbapi }) {
  
  const {Films, setFilms, setMovieId,setShowHead} = useContext(MovieContext)

  useEffect(() => {
    axios.get(tmdbapi).then((res) => {
      setFilms(res.data.results);

    })
    setShowHead(true)

  }, [tmdbapi,setFilms,setShowHead])

  const getMovieId = (id) => {
    
    setMovieId(id)
   
    

  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      {Films.map((film) => {
        return (

          <Card className='cards' key={film.id} style={{ width: '18rem' }}>
            <Card.Img className='card_image' variant="top" src={imageUrl + film.backdrop_path} />
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>
                {film.release_date}
              </Card.Text>
              <Link to={'/details'}>
              <Button onClick={() => getMovieId(film.id)} variant="primary">Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      })}

    </div>
  )
}

export default Moviez