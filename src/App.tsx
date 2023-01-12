import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Search from "./components/search";
import Details from "./pages/detail";
import List from "./pages/list";
import "./styles.css";
import axios from "axios";

export type SingleMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type GrouppedResults = {
  [key: string]: SingleMovie[];
};

const App = () => {
  const webWorker = new Worker("worker.js");
  const [movieListGrupped, setMovieListGrupped] = useState<GrouppedResults>({});
  const [isResponse, setIsResponse] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  const API_KEY = "8ea39b15";

  const searchContent = async (search: string, type: string) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}`
      );

      if (!response.data.Search) {
        setIsResponse(false);
        setMovieListGrupped({});
        return;
      }
      webWorker.postMessage(response.data.Search);
      location.pathname !== "/" && navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    webWorker.onmessage = (event: any) => {
      const { data } = event;
      setMovieListGrupped(data);
    };
  }, [searchContent]);

  return (
    <div className="app-container">
      <Search searchContent={searchContent} />
      <div className="body-container">
        <Routes>
          <Route
            path="/"
            element={
              <List
                movieListGrupped={movieListGrupped}
                isResponse={isResponse}
              />
            }
          />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
