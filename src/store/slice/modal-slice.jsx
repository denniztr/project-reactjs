import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    authModal: false,
    advModal: false,
    reviewsModal: false,
    editModal: false,
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
    setEditModal: (state) => {
      state.editModal = !state.editModal;
      console.log(state.editModal)
    },
  },
});

export const { setAuthModal, setAdvModal, setReviewsModal, setEditModal } = modalSlice.actions;
export default modalSlice.reducer;