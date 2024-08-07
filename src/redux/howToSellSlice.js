import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: 'Here is the information on how to sell items.'
};

const howToSellSlice = createSlice({
  name: 'howToSell',
  initialState,
  reducers: {
    updateInfo(state, action) {
      state.info = action.payload;
    }
  }
});

export const { updateInfo } = howToSellSlice.actions;
export default howToSellSlice.reducer;
