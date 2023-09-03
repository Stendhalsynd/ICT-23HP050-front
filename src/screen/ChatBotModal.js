import styled from "styled-components";
import colors from "../config/Colors";
import Modal from "../component/modal";


function ChatBotModal({ setModalOpen}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div >
            <Modal>
            <button onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
            </Modal>
            
        </div>
    );
}
export default ChatBotModal;