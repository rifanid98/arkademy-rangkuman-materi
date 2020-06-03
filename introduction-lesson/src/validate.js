let validate = {
    validateUsername: function(username){
        let regEx = /^[A-Za-z0-1]{6,}$/gi;
        if(username.match(regEx)){
            return true;
        } else {
            return false;
        }
    },
    validatePassword: function(password){
        let regEx = /^\w{8}$/gi;
        if (password.match(regEx)) {
          return true;
        } else {
          return false;
        }
    }
}
module.exports = validate;