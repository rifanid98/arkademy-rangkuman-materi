module.exports = validate = {

  validateUsername: function (username) {
    let regEx = /^[A-Za-z0-9]{6,}$/gi;
    if (username.match(regEx)) {
      return true;
    }
    return false;
  },

  validatePassword: function (password) {
    let regEx = /^.{8}$/gi;
    if (password.match(regEx)) {
      return true;
    }
    return false;
  }

};