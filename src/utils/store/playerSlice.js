import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    trailer: null,
  },
  reducers: {
    addPlayerTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addPlayerTrailerVideo } = playerSlice.actions;

export default playerSlice.reducer;
