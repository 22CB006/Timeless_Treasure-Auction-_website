import { createSlice } from '@reduxjs/toolkit';
import { auctionData } from '../constants/constants';

const initialState = {
  auctionData: auctionData,
  featuredProducts: [],
  categories: []
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setFeaturedProducts, setCategories } = homeSlice.actions;
export default homeSlice.reducer;
