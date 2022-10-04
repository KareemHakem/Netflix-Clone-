import React from "react";
import "./style.css";

export default function BannerPage({ imageBanner, truncate, movie }) {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie.original}
        </h1>
        <div className="banner-btn">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movie.overview, 150)}
        </h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
}
