import React from "react";
import styled from "styled-components";
import {
  closeModal,
  selectView,
} from "../../../../../redux/reducers/DM/DirectSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/Hooks";
import Loading from "../../../../common/Loading";
import { makeRoom } from "../../../../../redux/reducers/DM/DirectThunk";
import CloseSVG from "../../../../../assets/svgs/CloseSVG";

interface NewChatModalTitleContainerType {
    isSelected: boolean;
}

const NewChatModalTitleContainer = styled.div<NewChatModalTitleContainerType>`
    margin-top: -30px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;

    svg {
        cursor: pointer;
    }

    h1 {
        font-size: 1rem;
        font-weight: 600;
    }

    button {
        color: #0095f6;
        opacity: ${(props) => (props.isSelected ? 1.0 : 0.2)};
    }
`;

const NewChatModalTitle = () => {
    const dispatch = useAppDispatch();
    const { selectedNewChatUsers, isLoading } = useAppSelector(
        (state) => state.direct,
    );

    const makeRoomHandler = async () => {
        if (selectedNewChatUsers.length > 0) {
            await dispatch(makeRoom({ usernames: selectedNewChatUsers }));
            dispatch(closeModal());
            dispatch(selectView("chat"));
        }
    };

    return (
        <NewChatModalTitleContainer
            isSelected={selectedNewChatUsers.length > 0}
        >
            <CloseSVG
                color={"#262626"}
                size={"18"}
                onClick={() => {
                    dispatch(closeModal());
                }}
            />
            <h1>새로운 메시지</h1>
            {isLoading ? (
                <Loading size={18} />
            ) : (
                <button onClick={makeRoomHandler}>다음</button>
            )}
        </NewChatModalTitleContainer>
    );
};

export default NewChatModalTitle;
