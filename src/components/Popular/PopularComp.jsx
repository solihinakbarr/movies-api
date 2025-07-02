import React, { useEffect, useState } from "react";
import { getMovies } from "../../data/API";
import { useNavigate } from "react-router-dom";

const PopularComp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies().then((result) => {
      setMovies(result);
      setLoading(false);
    });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  // Skeleton Loader: tampil saat loading
  const skeletons = Array.from({ length: 8 }).map((_, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow animate-pulse overflow-hidden"
    >
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  ));

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
          Popular Movies
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? skeletons
            : movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleCardClick(movie.id)}
                className="bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-base font-semibold text-gray-800 truncate">
                    {movie.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                    {movie.overview}
                  </p>
                  <div className="mt-3 text-xs text-gray-500 flex flex-col gap-1">
                    <span>Release: {movie.release_date}</span>
                    <span className="text-yellow-500 font-medium">
                      ⭐ {(movie.vote_average * 10).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularComp;
