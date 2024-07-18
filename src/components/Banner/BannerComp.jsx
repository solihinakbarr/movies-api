import React, { useEffect, useState } from "react";
import { getMovies } from "../../data/API";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./BannerComp.css";

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
      autoPlay={true}
      transitionTime={1000} // Transition time in milliseconds (1 second for smooth transition)
      infiniteLoop={true}
      showStatus={false}
      interval={3000} // Interval time in milliseconds (3 seconds for total slide time including transition)
    >
      {banner.map((movie) => (
        <div key={movie.id} className="carousel-slide">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${baseImg}${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel-image"
            />
            <div className="carousel-gradient"></div>
            <div className="carousel-caption">
              <h3>{movie.title}</h3>
              <p className="carousel-overview">{movie.overview}</p>
              <div className="carousel-info">
                <span>{movie.release_date}</span>
                <span className="carousel-rating">⭐ {movie.vote_average}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerComp;
