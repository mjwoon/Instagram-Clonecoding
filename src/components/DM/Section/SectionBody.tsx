import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ChatBar from "./ChatBar";
import ChatSection from "./ChatSection";
import { useAppSelector } from "../../../redux/Hooks";

interface SectionBodyProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  sendMessageHandler: () => void;
  deleteMessageHandler: () => void;
  likeMessageHandler: () => void;
  unlikeMessageHandler: () => void;
}

const SectionBodyContainer = styled.section`
  position: relative;
  height: calc(100% - 60px); // 60px : 이름 써져있는 header 의 높이만큼빼줍니다.
  overflow-y: auto;
`;

const SectionBody = ({
  message,
  setMessage,
  sendMessageHandler,
  deleteMessageHandler,
  likeMessageHandler,
  unlikeMessageHandler,
}: SectionBodyProps) => {
  const { view, modal } = useAppSelector((state) => state.direct);
  const viewRender = () => {
    switch (view) {
      case "chat":
        return (
          <>
            <ChatSection
              deleteMessageHandler={deleteMessageHandler}
              likeMessageHandler={likeMessageHandler}
              unlikeMessageHandler={unlikeMessageHandler}
            />
            <ChatBar
              message={message}
              setMessage={setMessage}
              sendMessageHandler={sendMessageHandler}
            />
          </>
        );

      default:
        break;
    }
  };

  return <SectionBodyContainer>{viewRender()}</SectionBodyContainer>;
};

export default SectionBody;
