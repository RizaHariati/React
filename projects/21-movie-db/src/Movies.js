import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="movies">
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <div className="movies">
      {movies.map((movie) => {
        const { imdbID, Year, Title, Poster } = movie;
        return (
          <div key={imdbID} className="movie">
            <Link to={`/singlemovie/${imdbID}`} className="image">
              <img src={Poster} alt={imdbID} />
              <div className="info">
                <h4 className="title">{Title.substring(0, 60)}</h4>
                <p className="year">{Year}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
