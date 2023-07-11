import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartDataType } from "../constants/chartDataType";
import { fetchSuccess } from "./formRedux";

// thunk를 통한 비동기 처리
export const getChartData = createAsyncThunk(
  "chartData/getChartData",
  async (params: ChartDataType, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/shopping",
        params
      );
      dispatch(fetchSuccess(params));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
