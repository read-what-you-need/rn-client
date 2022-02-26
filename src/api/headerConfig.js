let token = localStorage.getItem("token");

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
