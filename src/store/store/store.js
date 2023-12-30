import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../slice/modal-slice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  }
})