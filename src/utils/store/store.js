import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langConfigReducer from "./langConfigSlice";
import playerReducer from "./playerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: langConfigReducer,
    player:playerReducer,
  },
});

export default store;