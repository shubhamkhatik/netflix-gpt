import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/langConstant";
import openai from "../../utils/openai";
import { addGptMovieResult } from "../../utils/store/gptSlice";
import { API_OPTIONS, moviesList} from "../../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const result= await data.json()
   return result.results;
  };

  const handleGptSearchClick = async () => {
    shuffleArray(moviesList);

    const selectedMovies = moviesList.slice(0, 5);

    const promiseArray = selectedMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
     const tmdbResults = await Promise.all(promiseArray);
   

    dispatch(
      addGptMovieResult({ movieNames: selectedMovies, movieResults: tmdbResults })
      );




    // ===============================openai code functionality==================================================
    // console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // TODO: Write Error Handling reurn some ui
    // }
    // console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // // [Promise, Promise, Promise, Promise, Promise]
    // const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    // dispatch(
    //   addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    //   );
    // ===================================================================================
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
