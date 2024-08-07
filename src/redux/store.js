import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import howToSellReducer from './howToSellSlice';
import contactUsReducer from './contactUsSlice';
import aboutReducer from './aboutSlice';
import auctionsReducer from './auctionSlice'; 
import productReducer from './productSlice';
import homeReducer from './homeSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    howToSell: howToSellReducer,
    contactUs: contactUsReducer,
    about: aboutReducer,
    auctions: auctionsReducer, 
    products: productReducer,
    home: homeReducer,
  }
});

export default store;
