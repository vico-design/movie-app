import * as React from "react";
import { useState } from "react";
import Row from "../../components/row";
import { SingleMovie } from "../../App";

type ListProps = {
  movieListGrupped: {
    [key: string]: SingleMovie[];
  };
};

const List = ({ movieListGrupped }: ListProps) => {
  const flattedResults = Object.entries(movieListGrupped);

  return (
    <div>
      {flattedResults.length ? (
        flattedResults.map((m) => <Row year={m[0]} movies={m[1]} key={m[0]} />)
      ) : (
        <h3>
          We dont have result for what you are looking for, please change your
          search
        </h3>
      )}
    </div>
  );
};

export default List;
