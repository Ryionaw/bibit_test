import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./App.css";
import Movielist from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
// import ModalPop from "./components/ModalPop";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("naruto");
  const [show, popup] = useState(false);

  const modalOpen = () => popup(true);
  const modalClose = () => popup(false);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a6b9edec`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("moviesFavourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("moviesFavourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const loadPoster = (movie) => {
    modalOpen();
    return (
      <Modal show={show} onHide={modalClose}>
        <Modal.Body>
          <img src={movie.Poster} alt={movie.Title}></img>
        </Modal.Body>
      </Modal>

      // <ModalPop show={show} onHide={modalClose} body={movie}></ModalPop>
    );
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row scrolled">
        <Movielist
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          handleModal={loadPoster}
          favouriteComponent={AddFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row scrolled">
        <Movielist
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          handleModal={loadPoster}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
