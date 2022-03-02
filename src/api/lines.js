import axios from "axios";
import headerConfig from "./headerConfig";
import Helpers from "../libs/Helpers";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const linesApi = {
  feedbackLines: async function ({ fileLineIds, feedback = 1 }) {
    let url = apiEndPoint + "line/feedback";
    let data = { fileLineIds, feedback };
    let result = axios
      .post(url, data, headerConfig.axiosConfig)
      .then(response => Helpers.responseHandler({ response, error: {} }))
      .catch(error => Helpers.responseHandler({ response: {}, error }));
    return result;
  }
};

export default linesApi;
