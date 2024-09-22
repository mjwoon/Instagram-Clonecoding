import { authAction } from "../../redux/reducers/auth/authSlice";
import { useAppDispatch } from "../../redux/Hooks";
import Form from "../../components/auth/Form";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";
import { signInUseCode } from "../../redux/reducers/auth/authThunk";
import InstagramLoading from "../../InstagramLoading";

const Section = styled.section`
  flex-shrink: 0;
  min-height: 100vh;
  overflow: hidden;

  .form-container {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
  }
`;

export default function AuthPage(props: { router: "signIn" | "signUp" }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { username, code } = queryString.parse(
    search
  ) as AuthType.resetPasswordQuery;

  useEffect(() => {
    const checkLoginUseCode = async () => {
      try {
        await dispatch(signInUseCode({ username, code })).unwrap();
        navigate("/");
      } catch (error) {
        // 에러인 경우(만료된 code) => 404페이지(만료된 페이지입니다)
        navigate("/error");
      }
    };

    if (username && code) {
      checkLoginUseCode();
    } else {
      dispatch(authAction.changeFormState(props.router));
    }
  }, [props.router]);

  return (
    <>
      {username && code ? (
        <InstagramLoading />
      ) : (
        <Section>
          <main className="form-container">
            <Form router={props.router} />
          </main>
        </Section>
      )}
    </>
  );
}
