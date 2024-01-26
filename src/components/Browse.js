import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptComponent/GptSearch";
import TrailerContainer from "./BrowseComponent/TrailerContainer";
import MovieContainer from "./BrowseComponent/MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies()

  return (
    <>
      <Header />
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
