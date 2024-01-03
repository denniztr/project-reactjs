import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    authModal: false,
    advModal: false,
    reviewsModal: false,
  },
  reducers: {
    setAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
    setAdvModal: (state) => {
      state.advModal = !state.advModal;
    },
    setReviewsModal: (state) => {
      state.reviewsModal = !state.reviewsModal;
    },
  },
});

export const { setAuthModal, setAdvModal, setReviewsModal } = modalSlice.actions;
export default modalSlice.reducer;