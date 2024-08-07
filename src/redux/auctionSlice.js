import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const auctionSlice = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    addAuction: (state, action) => {
      state.list.push(action.payload);
    },
    setAuctions: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { addAuction, setAuctions } = auctionSlice.actions;
export default auctionSlice.reducer;
