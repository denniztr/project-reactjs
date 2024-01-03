import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    authModal: false,
    advModal: false,
  },
  reducers: {
    setAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
    setAdvModal: (state) => {
      state.advModal = !state.advModal;
    },
  },
});

export const { setAuthModal, setAdvModal } = modalSlice.actions;
export default modalSlice.reducer;