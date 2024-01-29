import { GPT_BG_URL } from "../../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-full object-cover" src={GPT_BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;