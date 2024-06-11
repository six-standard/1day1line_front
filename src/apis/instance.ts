import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

instance.interceptors.request.use(
  (req) => {
    const uuid = cookie.get("uuid");
    const path = new URL(window.location.href).searchParams.get("uuid");
    if (!!path || !!uuid) {
      req.headers["uuid"] = path || uuid;
    }
    return req;
  },
  (err) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(err);
  }
);
