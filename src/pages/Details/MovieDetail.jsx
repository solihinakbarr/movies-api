import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../data/API"; // Asumsi ini adalah path ke file API
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetail.css"; // File CSS khusus untuk halaman MovieDetail

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia
  }

  // Gambar background dari backdrop_path
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
  };

  // Menangani kondisi jika tidak ada data crew
  const crewItems =
    movie.credits && movie.credits.crew ? movie.credits.crew.slice(0, 3) : [];

  return (
    <div className="movie-detail" style={backgroundStyle}>
      <div className="overlay"></div>
      <div className="movie-content">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="details">
          <h1>{movie.title}</h1>
          {movie.tagline && <p className="movie__tagline">{movie.tagline}</p>}
          <div className="movie__info">
            <div className="movie__rating">
              <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
              <span className="movie__voteCount">
                ({movie.vote_count} votes)
              </span>
            </div>
            <div className="movie__runtime">
              <FontAwesomeIcon icon={faClock} /> {movie.runtime} mins
            </div>
          </div>
          <div className="movie__releaseDate">
            Release date : {movie.release_date}
          </div>
          <h4>Synopsis :</h4>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
