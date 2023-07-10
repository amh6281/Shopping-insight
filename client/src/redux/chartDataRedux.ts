import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { ChartDataType } from "../constants/chartDataType";
import { getChartData } from "./apiCalls";

const chartDataSlice = createSlice({
  name: "chartData",
  initialState: [] as ChartDataType[],
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
