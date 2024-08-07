import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aboutInfo: 'Information about our auction site.'
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    updateAboutInfo(state, action) {
      state.aboutInfo = action.payload;
    }
  }
});

export const { updateAboutInfo } = aboutSlice.actions;
export default aboutSlice.reducer;
