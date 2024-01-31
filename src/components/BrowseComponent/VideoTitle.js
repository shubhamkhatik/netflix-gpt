import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlayerTrailerVideo } from "../../utils/store/playerSlice";
import { API_OPTIONS } from "../../utils/constants";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addPlayerTrailerVideo(trailer));
  };

  const goToPlayer = (videoId) => {
    getMovieVideos(videoId);
    navigate("/player");
  };
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg ">{overview}</p>
      <div className="my-4 md:m-0">
        <button
          className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"
          onClick={() => goToPlayer(movieId)}
        >
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
