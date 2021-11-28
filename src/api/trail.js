import axios from "axios";
import headerConfig from "./headerConfig";
import Helpers from "../libs/Helpers";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const trailApi = {
  createTrail: async function ({ trailTitle, trailLines }) {
    let url = apiEndPoint + "trail";
    let data = { trailTitle, trailLines };
    let result = axios
      .post(url, data, headerConfig.axiosConfig)
      .then(response => console.log(response))
      .then(data => {
        console.log(data);
      })
      .catch(error => Helpers.responseHandler({response:{}, error}));
    return result;
  }
};

export default trailApi;
