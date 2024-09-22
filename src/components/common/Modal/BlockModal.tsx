import ModalButtonContent from "./ModalContent/ModalButtonContent";
import ModalTitleContent from "./ModalContent/ModalTitleContent";
import ModalCard from "../../../styles/UI/ModalCard";
import styled from "styled-components";
import { authorizedCustomAxios } from "../../../customAxios";

const BlockModalInner = styled.div`
    padding-top: 20px;
`;

interface BlockModalProps {
    onModalOn: () => void;
    onModalOff: () => void;
    blockMemberUsername: string;
}

const BlockModal = ({
    onModalOn,
    onModalOff,
    blockMemberUsername,
}: BlockModalProps) => {
    const blockHandler = async () => {
        await authorizedCustomAxios(`/${blockMemberUsername}/block`);
    };
    return (
        <ModalCard
            modalType={"withBackDrop"}
            onModalOn={onModalOn}
            onModalOff={onModalOff}
        >
            <BlockModalInner>
                <ModalTitleContent
                    title={`${blockMemberUsername}님을 차단하시겠어요?`}
                    description={
                        "상대방은 Instagram에서 회원님의 프로필, 게시물 또는 스토리를 찾을 수 없습니다. Instagram은 회원님이 차단한 사실을 상대방에게 알리지 않습니다."
                    }
                />
                <ModalButtonContent
                    actionName={"차단"}
                    actionHandler={blockHandler}
                    onModalOff={onModalOff}
                />
            </BlockModalInner>
        </ModalCard>
    );
};

export default BlockModal;
