import axios from "axios";
import headerConfig from "./headerConfig";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_NODE_API;
let pdfToTextEndPoint = process.env.REACT_APP_PDF_TO_TEXT_ENDPOINT;

function createFileHashFormData({ file, hash }) {
  // create a form to send file
  const formData = new FormData();
  formData.append("file", file);
  formData.append("hash", hash);
  return formData;
}

// defining all api calls that interact with the table
const fileApi = {
  addFileRecordInDb: async function ({ hash, file }) {
    let url = apiEndPoint + "file";
    let formData = createFileHashFormData({ file, hash });
    let result = axios.post(url, formData, headerConfig.axiosFormConfig).then(response => {
      return response.status;
    });
    return result;
  },
  queryLibrary: async function ({ searchQuery, files = "f" }) {
    console.log(`search query in file api is :${searchQuery}`);
    let url = apiEndPoint + `file/library`;
    console.log(`url is :${url}`);
    let data = { query: `?object=${files}&mode=last&timefirst=2018-09-02&timelast=2018-09-04` };
    let response = axios.post(url, data, headerConfig.axiosConfig).then(response => {
      console.log(`response recieved from library api`);
      console.log(response);
      return response.data;
    });
    return response;
  },
  addFileToS3: async function ({ hash, file }) {
    let url = pdfToTextEndPoint;
    let formData = createFileHashFormData({ file, hash });
    let result = axios.post(url, formData, headerConfig.axiosFormConfig).then(response => {
      return response.data;
    });
    return result;
  },
  checkFileExists: async function ({ hash }) {
    let url = apiEndPoint + `file/exist/${hash}`;
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  },
  addFileInUserFiles: async function ({ fileId, userId }) {
    let url = apiEndPoint + `file/collection/user/${userId}`;
    let data = { fileId };
    let response = axios.post(url, data, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  },
  getFileById: async function (id) {
    let url = apiEndPoint + `file/${id}`;
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  },
  getFileByTrailId: async function ({ trailId }) {
    let url = apiEndPoint + `file/trail/${trailId}`;
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  },
  getFileListUser: async function ({ userId }) {
    let url = apiEndPoint + `file/user/${userId}`;
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  }
};

export default fileApi;
