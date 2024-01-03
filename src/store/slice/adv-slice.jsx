import { createSlice } from "@reduxjs/toolkit";

const advSlice = createSlice({
  name: 'adv',
  initialState: {
    selectedAdv: null,
  },
  reducers: {
    setSelectedAdv: (state, action) => {
      state.selectedAdv = action.payload;
    },
  },
});

export const { setSelectedAdv } = advSlice.actions;
export default advSlice.reducer;