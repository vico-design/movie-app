import * as React from "react";
import Row from "../../components/row";
import { SingleMovie } from "../../App";
import "./styles.css";

type ListProps = {
  movieListGrupped: {
    [key: string]: SingleMovie[];
  };
  isResponse: boolean;
};

const List = ({ movieListGrupped, isResponse }: ListProps) => {
  const flattedResults = Object.entries(movieListGrupped);
  console.log(flattedResults);

  return (
    <div>
      {flattedResults.length ? (
        flattedResults.map((m) => <Row year={m[0]} movies={m[1]} key={m[0]} />)
      ) : !isResponse ? (
        <h3 className="not-results">
          We dont have result for what you are looking for, please change your
          search.
        </h3>
      ) : (
        <h3 className="not-results">
          Search for a movie that you would like to get information about.
        </h3>
      )}
    </div>
  );
};

export default List;
