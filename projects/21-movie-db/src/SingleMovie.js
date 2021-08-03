import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useFetch } from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { loading, movies } = useFetch(`&i=${id}`);
  const { Title, Year, Actors, Plot, Poster } = movies;

  if (loading) {
    return (
      <div className="container">
        <div className="single-movie">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="single-movie">
        <div className="single-image">
          <img src={Poster} alt={id} />
        </div>
        <div className="single-info">
          <h2>{Title}</h2>
          <h4>Year : {Year}</h4>
          <p>Actors : {Actors}</p>
          <p>Plot : {Plot}</p>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
