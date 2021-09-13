import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommends: null,
  newDisneys: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.recommends = action.payload.recommends;
      state.newDisneys = action.payload.newDisneys;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovie } = movieSlice.actions;

export const selectRecommends = (state) => state.movie.recommends;
export const selectNewDisneys = (state) => state.movie.newDisneys;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
