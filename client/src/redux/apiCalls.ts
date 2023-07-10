import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartDataType } from "../constants/chartDataType";

// thunk를 통한 비동기 처리
export const getChartData = createAsyncThunk(
  "chartData/getChartData",
  async (params: ChartDataType, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/shopping",
        params
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
