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
const searchApi = {
  sendQuery: async function ({id, query, maxResults, accuracyGreaterThan}) {
    let url = `${apiEndPoint}search/${id}?q=${query}`;
    console.log(url)
    let result = axios.get(url, axiosConfig).then(response => {
        return response.data
    });
    return result;
  }
};

export default searchApi;
