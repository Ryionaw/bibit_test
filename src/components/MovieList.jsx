import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <React.Fragment>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-center m-3 col-3"
          onClick={() => props.handleModal(movie)}
        >
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://rukunprimaabadi.com/assets/images/noimage.jpg"
            }
            alt="movie"
          ></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
