import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    modalOpened(state) {
      state.isOpened = true;
    },
    modalClosed(state) {
      state.isOpened = false;
    },
  },
});

export const modalStatus = (state) => state.modals.isOpened;

export const { modalOpened, modalClosed } = modalsSlice.actions;

export default modalsSlice.reducer;
