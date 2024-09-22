import styled from "styled-components";
import { useAppSelector } from "redux/Hooks.ts";
import {
  NavHomeOff,
  NavHomeOn,
  NavSearchOff,
  NavSearchOn,
  NavUpload,
  DmIconOff,
  NavActiveOff,
  NavActiveOn,
  Settings,
  Logo,
  Thread,
} from "../../assets/index";

// aside : 별도 구획 요소
const SideStyle = styled.aside`
  max-width: 244px;
  width: 100%

  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  @media (max-width: 1000px) {
        display: none;
    }
    display: flex;
    align-items: center;

`;

const TabStyle = styled.div`
  width: 220px;
  height: 48px;
  padding: 12px;
  margin: 4px;

  box-shadow: none;
  border-radius: 8px;
`;
