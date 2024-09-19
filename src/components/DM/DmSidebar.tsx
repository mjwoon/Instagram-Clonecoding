import styled from "styled-components";
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
} from "../../../assets/index";

const SidebarStyle = styled.div`
  width = 72px;
  height = 100%;
  padding = 8px 12px 20px 12px;
  font-family = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size = 14px;
  line-height = 18px;
  text-align = start;
  letter-spacing = normal;  
  background-color = #ffffff;

`;

const OptionDiv = styled.div`
  width = 48px;
  height = 48px;
  padding = 12px;
  margin = 4px;

  box-shadow = none;
  border-radius = 8px;
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <OptionDiv>
        <Logo />
      </OptionDiv>
      <OptionDiv>
        <NavHomeOff />
      </OptionDiv>
      <OptionDiv>
        <NavSearchOff />
      </OptionDiv>
      <OptionDiv>
        <Logo></Logo>
      </OptionDiv>
      <OptionDiv>
        <DmIconOff />
      </OptionDiv>
      <OptionDiv>
        <NavActiveOff />
      </OptionDiv>
      <OptionDiv>
        <NavUpload />
      </OptionDiv>
      <OptionDiv>
        <Thread />
      </OptionDiv>
      <OptionDiv>
        <Settings />
      </OptionDiv>
    </SidebarStyle>
  );
};

export default Sidebar;
