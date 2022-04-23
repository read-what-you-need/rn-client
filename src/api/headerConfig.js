let axiosFormConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  }
};

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  }
};

let axiosConfigs = { axiosConfig, axiosFormConfig };

export default axiosConfigs;
