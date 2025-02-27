import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptComponent/GptSearch";
import TrailerContainer from "./BrowseComponent/TrailerContainer";
import MovieContainer from "./BrowseComponent/MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import JioNetworkWarning from "./JioNetworkWarning.js";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

  return (
    <>
      <Header />
      <JioNetworkWarning/>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <TrailerContainer />
          <MovieContainer />
        </>
      )}
    </>
  );
};

export default Browse;
