import axios from "axios";

// defining frequently used endpoints
let apiEndPoint = process.env.REACT_APP_CORE_SERVER;
// let pdfToTextEndPoint = process.env.REACT_APP_PDF_TO_TEXT_ENDPOINT;

// defining headers and configurations
let axiosFormConfig = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

let axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

// defining all api calls that interact with the table
const fileApi = {
  getFileById: async function (id) {
    let url = apiEndPoint + `file/${id}`;
    let response = axios.get(url, axiosConfig).then(response => {
      console.log(response.statusText, response.data);
      return response.data;
    });
    return response;
  },
  getFileList: async function () {
    let url = apiEndPoint + "file";
    let response = axios.get(url, axiosConfig).then(response => {
      console.log(response.statusText, response.data);
      return response.data;
    });
    return response;
  },
  addFile: async function ({ hash, file }) {
    let url = apiEndPoint + "file";
    console.log(file)
    // create a form to send file
    const formData = new FormData();
    formData.append("file", file);
    formData.append("hash", hash);

    axios.post(url, formData, axiosFormConfig).then(response => {
    //   console.log(response.statusText, response.data);
    });
  }
};

export default fileApi;
