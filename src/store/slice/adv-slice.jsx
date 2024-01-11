import { createSlice } from "@reduxjs/toolkit";

const advSlice = createSlice({
  name: 'adv',
  initialState: {
    selectedAdv: null,
    filteredData: [],
  },
  reducers: {
    setSelectedAdv: (state, action) => {
      state.selectedAdv = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setSelectedAdv, setFilteredData } = advSlice.actions;
export default advSlice.reducer;