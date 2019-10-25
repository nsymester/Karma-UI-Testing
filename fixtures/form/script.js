function validateSubmit(f) {
  console.log('hello');

  var validates = true;
  ['username', 'password'].forEach(function(field) {
    if (!document.getElementById(field).value) {
      validates = false;
      document.getElementById(field + '-label').className = 'error';
    } else {
      document.getElementById(field + '-label').className = '';
    }
  });
  document.getElementById('err').className = validates
    ? 'hidden'
    : 'error error-box';

  if (validates) {
    // fancy stuff goeth here
  }

  return false;
}

if (typeof exports !== 'undefined') {
  module.exports = {
    validateSubmit
  };
}
