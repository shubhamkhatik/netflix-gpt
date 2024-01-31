import { useDispatch } from "react-redux";
import { API_OPTIONS, IMG_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { addPlayerTrailerVideo } from "../../utils/store/playerSlice";

const MovieCard = ({ posterPath, videoId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!posterPath) return null;

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
    console.log("lolo",trailer)
    dispatch(addPlayerTrailerVideo(trailer));
  };

  const goToPlayer = (videoId) => {
    getMovieVideos(videoId);
    navigate("/player");
  };
  return (
    <div className="w-36 md:w-48 pr-4 transition-transform transform hover:scale-105 cursor-pointer " onClick={() => goToPlayer(videoId)}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
