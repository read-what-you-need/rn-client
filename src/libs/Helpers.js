import userApi from "../api/user";

let Helpers = {
  responseHandler: function ({ response, error }) {
    /* 
    https://stackoverflow.com/questions/49967779/axios-handling-errors
    */
    if (error.response) {
      if (error.response.status >= 401 && error.response.status <= 501) {
        return error.response.data;
      }
      return error.response.data;
    }
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      if (response.status === 401 && response.status <= 501) {
        return response;
      }
    }
  },
  insertInArray: function (arr, index, newItem) {
    return [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index)
    ];
  }
};

export default Helpers;
