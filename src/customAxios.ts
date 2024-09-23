// 인증 및 토큰 관리와 관련된 Axios 인스턴스를 설정하는 코드. 토큰이 만료되면 새 토큰을 요청하고,
//새로 발급된 토큰을 Axios 요청 헤더에 자동으로 설정하는 기능을 구현하고 있습니다.

import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

var jwt = require(`jsonwebtoken`);

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const authorizedCustomAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

//const accessToken = authorizedCustomAxios.defaults.headers.common[`Authorization`];
export const checkToken = async (
  config: any
): Promise<any> => {
  try {
    const accessToken =
      authorizedCustomAxios.defaults.headers.common[`Authorization`];
    const decode = jwt.decode(accessToken);
    const nowDate = new Date().getTime() / 1000;
    if (decode.exp < nowDate) {
      try {
        const {
          data: { data },
        }: { data: AuthType.TokenResponse } = await customAxios.post(
          `/reissue`
        );
        if (data) {
          setAccessTokenInAxiosHeaders(data);
          if (config.headers) {
            config.headers[
              `Authorization`
            ] = `${data.type} ${data.accessToken}`;
          }
        }
      } catch (error) {
        customAxios.post(`/logout/only/cookie`);
        window.location.replace("/");
      }
    }
  } catch (error) {
    console.error("Error checking token", error);
  }
  return config; // 반드시 config 반환
};

export const setAccessTokenInAxiosHeaders = (token: AuthType.Token) => {
  authorizedCustomAxios.defaults.headers.common[
    `Authorization`
  ] = `${token.type} ${token.accessToken}`;
};

authorizedCustomAxios.interceptors.request.use(checkToken);
