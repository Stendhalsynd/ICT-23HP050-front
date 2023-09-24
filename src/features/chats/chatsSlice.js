import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [
    { id: "12345667", role: "SYSTEM", text: "무엇을 도와드릴까요?" },
    { id: "12345668", role: "USER", text: "지난주 특이사항 목록을 확인해줘" },
  ],
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    systemChatPosted(state, action) {
      state.chats.push({
        id: new Date().toDateString,
        role: "SYSTEM",
        text: action.payload,
      });
    },
    userChatPosted(state, action) {
      state.chats.push({
        id: new Date().toDateString,
        role: "USER",
        text: action.payload,
      });
    },
  },
});

export const chats = (state) => state.chats;

export const { systemChatPosted, userChatPosted } = chatsSlice.actions;

export default chatsSlice.reducer;
