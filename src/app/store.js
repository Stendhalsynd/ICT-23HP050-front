import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "../features/modals/modalsSlice";
import chatsReducer from "../features/chats/chatsSlice";

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    chats: chatsReducer,
  },
});
