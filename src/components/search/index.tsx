import * as React from "react";
import "./styles.css";

type SearchProps = {
  searchContent: (search: string, type: string) => void;
};

const Search = ({ searchContent }: SearchProps) => {
  const [search, setSearch] = React.useState<{ input: string; type: string }>({
    input: "",
    type: "movie",
  });
  return (
    <div className="search__container">
      <h1>NetflixClone</h1>
      <div className="search">
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Titles, people, genres"
          onChange={(e) => setSearch({ ...search, input: e.target.value })}
        />
        <select
          name="type"
          onChange={(e) => setSearch({ ...search, type: e.target.value })}
        >
          <option value="movie" defaultValue="movie">
            movie
          </option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
        <button
          type="submit"
          onClick={() => searchContent(search.input, search.type)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
