import styled from "styled-components";
import ModalTitleContent from "../../../common/Modal/ModalContent/ModalTitleContent";
import ModalButtonContent from "../../../common/Modal/ModalContent/ModalButtonContent";
import ModalCard from "../../../../styles/UI/ModalCard";
import {
  closeModal,
  openModal,
} from "../../../../redux/reducers/DM/DirectSlice";
import { useAppDispatch } from "../../../../redux/Hooks";

const CommonDirectModalContainer = styled.div`
  padding-top: 20px;
`;

interface CommonDirectModalProps {
  modalType: Direct.modalType;
  title: string;
  description: string;
  actionName: string;
  actionHandler?: () => void; // message 삭제에서 사용
}

const CommonDirectModal = ({
  modalType,
  title,
  description,
  actionName,
  actionHandler,
}: CommonDirectModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalCard
      modalType={"withBackDrop"}
      onModalOn={() => {
        dispatch(openModal(modalType));
      }}
      onModalOff={() => {
        dispatch(closeModal());
      }}
    >
      <CommonDirectModalContainer>
        <ModalTitleContent title={title} description={description} />
        <ModalButtonContent
          actionHandler={actionHandler}
          actionName={actionName}
        />
      </CommonDirectModalContainer>
    </ModalCard>
  );
};

export default CommonDirectModal;
