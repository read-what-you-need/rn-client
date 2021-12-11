import axios from "axios";
import headerConfig from "./headerConfig";
import Helpers from "../libs/Helpers";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const tagApi = {
  getTags: async function ({ id, offset = 0, limit = 6, orderBy = "frequency_count", arrangeBy = "desc" }) {
    let url = `${apiEndPoint}tag/${id}?orderBy=${orderBy}&arrangeBy=${arrangeBy}&offset=${offset}&limit=${limit}`;
    let result = axios
      .get(url, headerConfig.axiosConfig)
      .then(response => Helpers.responseHandler({ response, error: {} }))
      .catch(error => Helpers.responseHandler({ response: {}, error }));
    return result;
  },
};

export default tagApi;
