import styled from "styled-components";


const StyleRight = styled.div`
  width: 319px;
  height: 729px;

`

const Recommend = styled.div`
  width: 283px;
  height: 729.6px;
  padding: 0px 0px 0px 64px;
`;

const InfoStyle = styled.div`
  width: 287px;
  height: 112.2px;
  padding: 0px 0px 38px;
`;

const RightSide = () => {
  return (
    <InfoStyle>
      <a>소개</a>
      <a>도움말</a> <a>홍보 센터</a> <a>API</a> <a>채용 정보</a>
      <a>개인정보처리방침</a> <a>약관</a> <a>위치</a> <a>언어</a>
      <a>Meta Verified</a>
      <p>© 2024 Instagram from Meta</p>
    </InfoStyle>
  );
};

export default RightSide;
