import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../data/API"; // Sesuaikan path ke file API Anda
import { Link } from "react-router-dom";
import "./TopRate.css";

const TopRate = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <div className="top-rated-comp">
      <h1>Top Rated</h1>
      <div className="top-rated-grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="top-rated-card-link"
          >
            <div className="top-rated-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="top-rated-info">
                <h3 className="top-rated-title">{movie.title}</h3>
                <p className="top-rated-overview">
                  {movie.overview.substring(0, 100)}...
                </p>
                <div className="top-rated-details">
                  <span>Release Date: {movie.release_date}</span>
                  <span>Rating: {(movie.vote_average * 10).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRate;
