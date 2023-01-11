import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

type MovieDetails = {
  Actors: string;
  Award: string;
  Country: string;
  Genre: string;
  Plot: string;
  Title: string;
  Released: string;
  imdbRating: string;
  Poster: string;
};

const MovieDetails = () => {
  const [detailMovie, setDetailMovie] = useState<MovieDetails>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const API_KEY = "8ea39b15";
      const url = `https://omdbapi.com/?&apikey=${API_KEY}&i=${id}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDetailMovie(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  if (!detailMovie) {
    return <p>loading...</p>;
  }

  return (
    <div className="movie-info">
      <header
        className="detail--image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${detailMovie.Poster}")`,
          backgroundPosition: "center center",
        }}
      >
        <h1 className="detail-image-title">{detailMovie.Title}</h1>
        <div className="img-fadeBottom" />
      </header>
      <div className="text-detail">
        <p className="detail-description">{detailMovie.Plot}</p>

        <div className="release-rating">
          <p className="detail-release">
            <span className="span">RELEASE DATE: </span>
            {detailMovie.Released}
          </p>
          <p className="detail-rating">
            <span className="span">RATING: </span>
            {detailMovie.imdbRating}
          </p>
          {detailMovie.Genre && (
            <p className="genres">
              <span className="span">GENRES:</span>

              <span className="genres-list">{detailMovie.Genre}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
