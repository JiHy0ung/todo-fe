import axios from "axios";

const api = axios.create({
  // Mixed Content 에러
  // 배포 사이트 주소는 https인데 http로 api를 요청해서 차단됨.
  // 프록시 만들어서 연결
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
  baseURL: `${process.env.REACT_APP_BACKEND_PROXY}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api;
