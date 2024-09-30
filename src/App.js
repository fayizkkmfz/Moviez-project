
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './header/NavigationBar';
import Home from './pages/Home';
import Moviez from './pages/Moviez';
import { Action_movies, Comedy_movies, Thriller_movies } from './url';
import Details from './pages/Details';
import { createContext, useState } from 'react';
import Banner from './pages/Banner';


const MovieContext = createContext()




function App() {
  const [MovieId, setMovieId] = useState()
  const [Films, setFilms] = useState([])
  const [clickedMovie, setclickedMovie] = useState({})
  const [ShowHead, setShowHead] = useState(true)
  const [SearchText, setSearchText] = useState()
  const [ShowBanner, setShowBanner] = useState(true)
  return (
    <div className="App">
      <MovieContext.Provider value={{ Films: Films, setFilms: setFilms, MovieId, setMovieId, clickedMovie, setclickedMovie, ShowHead, setShowHead,SearchText, setSearchText ,setShowBanner}}>

        <BrowserRouter>
          {ShowHead === true ? <NavigationBar /> : ""}
           {ShowBanner === true ? <Banner /> :""}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/popular' element={<Moviez title={"Popular Movies"} tmdbapi={Action_movies} />} />
            <Route path='/thriller' element={<Moviez title={"Thriller Movies"} tmdbapi={Thriller_movies} />} />
            <Route path='/comedy' element={<Moviez title={"Comedy Movies"} tmdbapi={Comedy_movies} />} />
            <Route path='/details' element={<Details />} />

          </Routes>

        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}
export { MovieContext }
export default App;
