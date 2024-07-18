import React, { useEffect, useState } from "react";
import { getComingSoonMovies } from "../../data/API"; // Sesuaikan path ke file API Anda
import { Link } from "react-router-dom";
import "./Cooming.css";

const Cooming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getComingSoonMovies().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <div className="cooming-comp">
      <h1>Coming Soon</h1>
      <div className="cooming-grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="cooming-card-link"
          >
            <div className="cooming-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="cooming-info">
                <h3 className="cooming-title">{movie.title}</h3>
                <p className="cooming-overview">
                  {movie.overview.substring(0, 100)}...
                </p>
                <div className="cooming-details">
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

export default Cooming;
