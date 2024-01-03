import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slice/modal-slice';
import advReducer from '../slice/adv-slice';
import userReducer from '../slice/user-slice';
import { advApi } from '../adv-api/index';
import { userApi } from '../user-api/index';
import { authApi } from '../auth-api/index';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    adv: advReducer,
    user: userReducer,
    [advApi.reducerPath]: advApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(advApi.middleware, userApi.middleware, authApi.middleware),
});
