import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "../icons/searchIcon";
import "./styles.css";
import { ComebackIcon } from "../icons/comeBackIcon";

type SearchProps = {
  searchContent: (search: string, type: string) => void;
};

const Search = ({ searchContent }: SearchProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = React.useState<{ input: string; type: string }>({
    input: "",
    type: "movie",
  });
  return (
    <div className="search__container">
      <button className="search__icon" onClick={() => navigate("/")}>
        Entertainment
      </button>
      {location.pathname !== "/" ? (
        <div className="search__comeback__container">
          <button className="search__comeback" onClick={() => navigate("/")}>
            <ComebackIcon />
          </button>
        </div>
      ) : (
        <div className="search__form">
          <input
            type="text"
            name="title"
            className="search__input"
            placeholder="Movie title"
            onChange={(e) => setSearch({ ...search, input: e.target.value })}
          />
          <select
            className="search__select"
            name="type"
            onChange={(e) => setSearch({ ...search, type: e.target.value })}
          >
            <option value="movie" defaultValue="movie">
              Movie
            </option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button
            className="search__button"
            type="submit"
            onClick={() => searchContent(search.input, search.type)}
          >
            <SearchIcon />
            <h3>Search</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
