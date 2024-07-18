import React, { useEffect, useState } from "react";
import { getMovies } from "../../data/API";
import { useNavigate } from "react-router-dom";
import "./PopularComp.css";

const PopularComp = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies().then((result) => {
      setMovies(result);
    });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="popular-comp">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="movie-card-container"
            key={movie.id}
            onClick={() => handleCardClick(movie.id)}
          >
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p>{movie.overview.substring(0, 100)}...</p>
                <div className="movie-details">
                  <span>Release Date: {movie.release_date}</span>
                  <span>Rating: {(movie.vote_average * 10).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularComp;
