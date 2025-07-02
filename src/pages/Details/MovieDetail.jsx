import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../data/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((result) => {
      setMovie(result);
    });
  }, [id]);

  if (!movie) {
    return <div className="text-center py-10 text-blue-600">Loading...</div>;
  }

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const crewItems =
    movie.credits && movie.credits.crew ? movie.credits.crew.slice(0, 3) : [];

  return (
    <div className="relative min-h-screen text-white" style={backgroundStyle}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster */}
          <div className="w-full md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Detail Info */}
          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>

            {movie.tagline && (
              <p className="italic text-blue-300">{movie.tagline}</p>
            )}

            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-200">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <span>{movie.vote_average}</span>
                <span className="text-xs text-gray-400">
                  ({movie.vote_count} votes)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} />
                <span>{movie.runtime} mins</span>
              </div>
              <div>Release: {movie.release_date}</div>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Synopsis:</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                {movie.overview}
              </p>
            </div>

            {crewItems.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold">Crew:</h4>
                <ul className="text-sm text-gray-300">
                  {crewItems.map((crew) => (
                    <li key={crew.id}>
                      {crew.name} - <span className="italic">{crew.job}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
