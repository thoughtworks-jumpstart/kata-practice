const containsLowerCaseFn = lowercase => {
  return lowercase >= "a" && lowercase <= "z";
};
const containsUpperCaseFn = uppercase => {
  return uppercase >= "A" && uppercase <= "Z";
};

module.exports.passwordValidation = password => {
  const isPasswordLengthGt8 = password.length >= 8;
  const splitPassword = password.split("");
  const containsNumber = splitPassword.some(
    val => isNaN(Number(val)) === false
  );
  const containsLowerCase = splitPassword.some(containsLowerCaseFn);
  const containsUpperCase = splitPassword.some(containsUpperCaseFn);

  if (
    isPasswordLengthGt8 &&
    containsNumber &&
    containsLowerCase &&
    containsUpperCase
  ) {
    return true;
  }
  return false;
};
