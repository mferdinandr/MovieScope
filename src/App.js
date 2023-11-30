import logo from './logo.svg';
import './App.css';
import { getMovieList, searchMovie } from './api';

const App = () => {
  const search = (q) => {
    console.log(q);
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
