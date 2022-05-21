import * as types from "../constants/ActionTypes";
export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const userToken = store.getState()?.userWrapper?.user?.token || null;
      if (userToken) {
        config.headers.Authorization = userToken;
      }
      return config;
    },
    err => Promise.reject(err)
  );
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    error => {
      if (error.response.status === 403) {
        store.dispatch({ type: types.USER_LOGOUT_REQUEST });
      }
      return Promise.reject(error);
    }
  );
}