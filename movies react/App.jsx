import './App.css'
import Movies from './movies';
import Header from './header';
import Moviedetail from './movielist.json'

function App() {
  return (
    
    <div className='App'>
       <Header/>
       <div className='allmovies'>
       {
        Moviedetail.map(
          (movie)=>{
            return <Movies name={movie.Title} src={movie.Poster} year = {movie.Year}/>
          }
        )
       }
       </div>
    </div>
    
  );
}

export default App
