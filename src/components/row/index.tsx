import * as React from "react";
import { SingleMovie } from "../../App";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export type IRowProps = {
  year: string;
  movies: SingleMovie[];
};

const Row = ({ year, movies }: IRowProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="row">
      <h2 className="row--title">{year}</h2>
      <div className="row--posters">
        {movies.map((m: any) => (
          <img
            key={m.imdbID}
            className="row--poster"
            src={m.Poster}
            onClick={() => handleClick(m.imdbID)}
            alt={m.Title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
