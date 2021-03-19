import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTORIZED: 401,
};

export const createAPI = (onUnautorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onSucces = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTORIZED) {
      onUnautorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSucces, onFail);

  return api;
};
