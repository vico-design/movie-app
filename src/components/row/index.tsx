import * as React from "react";
import { singleMovie } from "../../pages/home";
import { useNavigate } from "react-router-dom";

export interface IRowProps {
  year: string;
  movies: singleMovie[];
}

export default function Row({ year, movies }: IRowProps) {
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
            src={m.Poster}
            onClick={() => handleClick(m.imdbID)}
            alt={m.Title}
          />
        ))}
      </div>
    </div>
  );
}
