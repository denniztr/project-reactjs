import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../slice/modal-slice'
import advReducer from '../slice/adv-slice'
import { advApi } from "../adv-api/index";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    adv: advReducer,
    [advApi.reducerPath]: advApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(advApi.middleware)
})