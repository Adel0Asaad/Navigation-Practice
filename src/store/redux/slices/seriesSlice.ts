import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Series } from "../../../backend/Classes/series";

interface SeriesState {
  seriesList: Series[];
}

const initialState: SeriesState = {
  seriesList: [],
};

const seriesSlice = createSlice({
  name: "mediaList",
  initialState: initialState,
  reducers: {
    setSeriesList: (state, action: PayloadAction<Series[]>) => {
      state.seriesList = action.payload;
      return state;
    },
    addSeriesList: (state, action: PayloadAction<Series[]>) => {
      const existingIdsSet = new Set(
        state.seriesList.map((existingSeries) => existingSeries.id)
      );
      const listToAdd = action.payload.filter(
        (series) => !existingIdsSet.has(series.id)
      );

      state.seriesList = [...state.seriesList, ...listToAdd];
      return state;
    },
    resetSeries: (state) => {
      return (state = initialState);
    },
  },
});

export const { setSeriesList, addSeriesList, resetSeries } =
  seriesSlice.actions;

export default seriesSlice.reducer;
