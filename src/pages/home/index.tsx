import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Row from "../../components/row";

export interface singleMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieList {
  Response: string;
  Search: singleMovie[];
  totalResults: string;
}

export default function Home() {
  const [movie, setMovie] = useState<string>();
  const [movieListGrupped, setMovieListGrupped] = useState([]);

  const API_KEY = "8ea39b15";

  const searchMovie = async () => {
    try {
      const request = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
      );
      if (request.status === 200 && request.data.Response === "True") {
        grupping(request.data);
      } else {
        //handle error here
      }
    } catch (err) {
      console.error(err);
    }
  };

  const grupping = (movieList: MovieList) => {
    movieList !== undefined &&
      movieList.Search.reduce((acc: any, movie) => {
        if (!(movie.Year in acc)) {
          acc[movie.Year] = [movie];
        } else {
          acc[movie.Year].push(movie);
        }
        setMovieListGrupped(acc);
        return acc;
      }, {});
  };

  const moviesArrayProYear = Object.entries(movieListGrupped);

  return (
    <div>
      <input
        type="text"
        name="title"
        className="input"
        placeholder="Titles, people, genres"
        onChange={(e) => setMovie(e.target.value)}
      />
      <button type="submit" onClick={searchMovie}>
        Search
      </button>
      {moviesArrayProYear.map((m) => (
        <Row year={m[0]} movies={m[1]} />
      ))}
    </div>
  );
}
