import axios from "axios";
import headerConfig from "./headerConfig";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const userApi = {
  isUserAuth: async function () {
    let url = apiEndPoint + "auth";
    let result = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return result;
  },
  signUpUser: async function ({ username, password }) {
    let url = apiEndPoint + "user/signup";
    let formData = { username, password };
    let result = axios.post(url, formData, headerConfig.axiosConfig).then(response => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    });
    return result;
  },
  logOutUser: async function () {
    localStorage.setItem("token", "");
    window.location.reload();
  },
  signInUser: async function ({ username, password }) {
    let url = apiEndPoint + "user/signin";
    let formData = { username, password };
    let result = axios.post(url, formData, headerConfig.axiosConfig).then(response => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    });
    return result;
  }
};

export default userApi;
