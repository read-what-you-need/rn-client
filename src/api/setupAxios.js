export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const userToken = store.getState().userWrapper?.user?.token || null;
      if (userToken) {
        config.headers.Authorization = userToken;
      }
      return config;
    },
    err => Promise.reject(err)
  );
}