import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChartDataType } from "../constants/chartDataType";
import { RootState } from "./store";

const initialState: ChartDataType = {
  startDate: "",
  endDate: "",
  timeUnit: "",
  category: "",
  keyword: "",
  device: "",
  gender: "",
  ages: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<ChartDataType>) => {
      return action.payload;
    },
  },
});

export const { fetchSuccess } = formSlice.actions;

export default formSlice.reducer;
export const selectFormData = (state: RootState) => state.formData;
