import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../constants/constants';

const initialState = {
  products: PRODUCTS,
  searchTerm: '',
  selectedCategory: 'all',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;

