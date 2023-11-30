import logo from './logo.svg';
import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <div>{movie.title}</div>
          <div>{movie.poster_path}</div>
          <div>{movie.release_date}</div>
          <div>{movie.vote_average}</div>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={{movie.poster_path}} alt=""></img>
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE SCOPE</h1>

        <input
          type="text"
          placeholder="Cari film anda..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />

        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title"></div>
            <img className="Movie-image" src="" alt=""></img>
            <div className="Movie-date">11-12-2023</div>
            <div className="Movie-rate"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
