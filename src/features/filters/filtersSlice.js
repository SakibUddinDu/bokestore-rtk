import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchedText: "",
  status: "All",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterBySearchedText: (state, action) => {
      state.searchedText = action.payload;
    },
    filterByBookType: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { filterBySearchedText, filterByBookType } = filtersSlice.actions;
