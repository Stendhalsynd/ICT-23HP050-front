import { useDispatch, useSelector } from "react-redux";
import { modalClosed } from "./modalsSlice";
import { modalStatus } from "./modalsSlice";
import { systemChatPosted, userChatPosted, chats } from "../chats/chatsSlice";

import { useState } from "react";

export function Modal() {
  const dispatch = useDispatch();
  const chatList = useSelector(chats);

  const [inputText, setInputText] = useState("");

  const closeButttonStyle = {
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "20px",
    margin: "5px",
    padding: "10px",
    cursor: "pointer",
  };

  const chatBox = {
    padding: "10px 12px",
    display: "inline-flex",
    borderRadius: "12px 12px 12px 0px",
    border: "1px solid  #BDBDBD",
    width: "fit-content",
    marginBottom: "10px",
  };

  const chatStyle = (role) =>
    role === "SYSTEM"
      ? { ...chatBox, backgroundColor: "blue", color: "white" }
      : {
          ...chatBox,
          backgroundColor: "#FEF01B",
          color: "black",
          borderRadius: "12px 12px 0px 12px",
          alignSelf: "flex-end",
        };

  const containerStyle = {
    backgroundColor: "white",
    width: "400px",
    height: "500px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "grid",
    gridTemplateRows: "1fr 15fr 2fr",
    zIndex: 100,
    borderRadius: "16px",
    border: "1px solid #BDBDBD",
    padding: "25px",
  };

  const modalHeaderStyle = {
    display: "grid",
    gridTemplateColumns: "8fr 1fr",
  };

  const inputTextStyle = {
    color: "#6B6B6B",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    padding: "10px 12px",
    borderRadius: "10px",
  };

  const askButtonStyle = {
    display: "flex",
    padding: "10px 20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    border: "1px solid #BDBDBD",
    background: "#FC9162",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={modalHeaderStyle}>
        <div></div>
        <button
          style={closeButttonStyle}
          onClick={() => dispatch(modalClosed())}
        >
          X
        </button>
      </div>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {chatList.chats.map((chatItem) => (
          <li key={chatItem.id} style={chatStyle(chatItem.role)}>
            {chatItem.text}
          </li>
        ))}
      </ul>
      <textarea
        type="text"
        placeholder="지난주 울산신항에 입항했던 선박들에 대한 정보를 알려줘"
        onChange={(e) => {
          if (e.target.value.length <= 100) setInputText(e.target.value);
        }}
        value={inputText}
        style={inputTextStyle}
      />
      <div
        style={{ lineHeight: 2.5, display: "flex", justifyContent: "flex-end" }}
      >
        {inputText.length} / 100
      </div>

      <button
        style={askButtonStyle}
        onClick={() => {
          dispatch(userChatPosted(inputText));
          setInputText("");
        }}
      >
        요청하기
      </button>
    </div>
  );
}
