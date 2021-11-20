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
    formData = { username, password };
    let result = axios.post(url, formData, axiosConfig).then(response => {
      return response.status;
    });
    return result;
  },
};

export default userApi;
