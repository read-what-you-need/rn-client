import axios from "axios";
import headerConfig from "./headerConfig";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;

// defining all api calls that interact with the table
const searchApi = {
  sendQuery: async function ({ fileId, query, currentPage = 0, pageSize = 5, orderBy = "score", arrangeBy = "desc" }) {
    let offset = currentPage * pageSize;
    let limit = pageSize;
    let url = `${apiEndPoint}search/${fileId}?q=${query}&orderBy=${orderBy}&arrangeBy=${arrangeBy}&offset=${offset}&limit=${limit}`;
    let result = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return result;
  }
};

export default searchApi;
