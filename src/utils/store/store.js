import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langConfigReducer from "./langConfigSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: langConfigReducer,
  },
});

export default store;