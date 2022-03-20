let token = JSON.parse(localStorage.getItem("user"))?.token || null

// defining headers and configurations
let axiosFormConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: token
  }
};

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  }
};

let axiosConfigs = { axiosConfig, axiosFormConfig };

export default axiosConfigs;
