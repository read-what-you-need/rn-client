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
  getFileById: async function (id) {
    let url = apiEndPoint + `file/${id}`;
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  },
  getFileList: async function () {
    let url = apiEndPoint + "file";
    let response = axios.get(url, headerConfig.axiosConfig).then(response => {
      return response.data;
    });
    return response;
  }
};

export default fileApi;
