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
      .then(response => Helpers.responseHandler({ response, error: {} }))
      .catch(error => Helpers.responseHandler({ response: {}, error }));
    return result;
  },
  listUserTrails: async function ({ offset = 0, limit = 5, orderBy = "created_at", arrangeBy = "desc" }) {
    let url = `${apiEndPoint}trail?orderBy=${orderBy}&arrangeBy=${arrangeBy}&offset=${offset}&limit=${limit}`;
    let result = axios
      .get(url, headerConfig.axiosConfig)
      .then(response =>  Helpers.responseHandler({ response, error: {} }))
      .catch(error => Helpers.responseHandler({ response: {}, error }));
    return result;
  }
};

export default trailApi;
