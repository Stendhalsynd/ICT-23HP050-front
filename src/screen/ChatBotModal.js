import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../config/Colors";
import Modal from "../component/modal/Modal";


function ChatBotModal({setModalOpen}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal>
             <button onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </Modal>
           

    );
}
export default ChatBotModal;