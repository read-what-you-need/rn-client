import axios from "axios";
import headerConfig from "./headerConfig";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const searchApi = {
  sendQuery: async function ({id, query, maxResults, accuracyGreaterThan}) {
    let url = `${apiEndPoint}search/${id}?q=${query}`;
    console.log(url)
    let result = axios.get(url, headerConfig.axiosConfig).then(response => {
        return response.data
    });
    return result;
  }
};

export default searchApi;
