import React, { useEffect, useState } from "react";
import { getComingSoonMovies } from "../../data/API";
import { Link } from "react-router-dom";

const Cooming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComingSoonMovies().then((result) => {
      setMovies(result);
      setLoading(false);
    });
  }, []);

  const skeletons = Array.from({ length: 8 }).map((_, idx) => (
    <div
      key={idx}
      className="bg-white rounded shadow animate-pulse overflow-hidden"
    >
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  ));

  return (
    <section className="bg-gray-50 py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Coming Soon
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? skeletons
            : movies.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                    {movie.overview}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 flex flex-col gap-1">
                    <span>Release: {movie.release_date}</span>
                    <span className="text-yellow-500 font-medium">
                      ⭐ {(movie.vote_average * 10).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cooming;
