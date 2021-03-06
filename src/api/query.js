import axios from "axios";
import headerConfig from "./headerConfig";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;
let questionGeneratorApiEndPoint = process.env.REACT_APP_QUESTION_GENERATOR_ENDPOINT;

// defining all api calls that interact with the table
const searchApi = {
  sendQuery: async function ({
    fileId,
    query,
    currentPage = 0,
    pageSize = 5,
    minScoreThreshold = 0.0,
    orderBy = "score",
    arrangeBy = "desc",
    feedback = 2
  }) {
    let offset = currentPage * pageSize;
    let limit = pageSize;
    let url = `${apiEndPoint}search/${fileId}?q=${query}&orderBy=${orderBy}&arrangeBy=${arrangeBy}&score=${minScoreThreshold}&offset=${offset}&limit=${limit}&feedback=${feedback}`;
    try {
      let result = axios
        .get(url, headerConfig.axiosConfig)
        .then(response => {
          return response.data;
        })
        .catch(error => error);
      return result;
    } catch (err) {
      return new Error(err);
    }
  },
  getQuestion: async function ({ query }) {
    let url = `${questionGeneratorApiEndPoint}`;
    let response = axios.post(url, { query }).then(response => {
      return response.data;
    });
    return response;
  },
  getPopularQueryForFile: async function ({ fileId }) {
    let url = `${apiEndPoint}search/popular/${fileId}`;
    let result = axios
      .get(url, headerConfig.axiosConfig)
      .then(response => {
        return response.data;
      })
      .catch(error => error);
    return result;
  }
};

export default searchApi;
