import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    access_token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem('access_token', state.access_token);
    },
  },
});

export const { setUser, setAccessToken } = userSlice.actions;
export default userSlice.reducer;