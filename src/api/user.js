import axios from "axios";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining headers and configurations

let axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

// defining all api calls that interact with the table
const userApi = {
  signUpUser: async function ({ username, password }) {
    let url = apiEndPoint + "user/signup";
    let formData = { username, password };
    let result = axios.post(url, formData, axiosConfig).then(response => {
      return response.data;
    });
    return result;
  },
};

export default userApi;
