import React, { useEffect, useState } from "react";
import { getMovies } from "../../data/API";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const BannerComp = () => {
  const [banner, setBanner] = useState([]);
  const baseImg = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovies().then((result) => {
      setBanner(result);
    });
  }, []);

  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      transitionTime={1000}
      interval={3000}
      className="relative"
    >
      {banner.map((movie) => (
        <div key={movie.id} className="relative h-[60vh] md:h-[75vh] lg:h-[90vh] w-full">
          <Link to={`/movie/${movie.id}`} className="block h-full w-full relative">
            {/* Gambar utama */}
            <img
              src={`${baseImg}${movie.backdrop_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

            {/* Caption */}
            <div className="absolute bottom-0 z-20 text-left text-white p-4 md:p-8 max-w-2xl">
              <h3 className="text-xl md:text-3xl font-bold">{movie.title}</h3>
              <p className="text-sm md:text-base mt-2 line-clamp-3">{movie.overview}</p>
              <div className="flex items-center gap-4 mt-3 text-sm opacity-80">
                <span>{movie.release_date}</span>
                <span className="text-yellow-400">⭐ {movie.vote_average}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerComp;
