let Helpers = {
  uuid_generator: function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  },
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
  },
  isEmailFieldValid: function (email) {
    let isValidEmail = true;
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      isValidEmail = false;
    }
    return isValidEmail;
  }
};

export default Helpers;
