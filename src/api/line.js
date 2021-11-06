import axios from "axios";

// defining frequently used endpoints
let searchApiEndPoint = process.env.REACT_APP_SEARCH_API;

// defining headers and configurations
let axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

// defining all api calls that interact with the table
const fileApi = {
  getLines: async function ({ id, query, maxResults, accuracyGreaterThan }) {
    let url = searchApiEndPoint;
    let data = { file_id: id, query, maxResults, accuracyGreaterThan };
    let result = axios.post(url, data, axiosConfig).then(response => {
        return response.data
    });
    return result;
  }
};

export default fileApi;
