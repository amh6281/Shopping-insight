import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { ChartDataType, Result } from "../constants/chartDataType";
import { getChartData } from "./apiCalls";

interface ChartDataState {
  results: Result[];
}

const chartDataSlice = createSlice({
  name: "chartData",
  initialState: { results: [] } as ChartDataState,
  reducers: {},
  // createAsyncThunk를 사용하여 정의된 액션함수를 사용하기 위한 extraReducers
  extraReducers: (builder) => {
    builder.addCase(getChartData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default chartDataSlice.reducer;
export const selectChartData = (state: RootState) => state.chartData;
