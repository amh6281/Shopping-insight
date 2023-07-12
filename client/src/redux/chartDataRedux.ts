import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { InsightResponse } from "../constants/chartDataType";
import { getChartData } from "./apiCalls";

const chartDataSlice = createSlice({
  name: "chartData",
  initialState: {
    startDate: "",
    endDate: "",
    timeUnit: "",
    results: [],
  } as InsightResponse,
  reducers: {
    resetChartData: (state) => {
      state.startDate = ""; // startDate 초기화
      state.endDate = ""; // endDate 초기화
      state.timeUnit = ""; // timeUnit 초기화
      state.results = []; // results 초기화
    },
  },
  // createAsyncThunk를 사용하여 정의된 액션함수를 사용하기 위한 extraReducers
  extraReducers: (builder) => {
    builder.addCase(getChartData.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { resetChartData } = chartDataSlice.actions;
export default chartDataSlice.reducer;
export const selectChartData = (state: RootState) => state.chartData;
