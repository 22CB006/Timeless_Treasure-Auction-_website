import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactInfo: 'Here is how you can contact us.'
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    updateContactInfo(state, action) {
      state.contactInfo = action.payload;
    }
  }
});

export const { updateContactInfo } = contactUsSlice.actions;
export default contactUsSlice.reducer;
