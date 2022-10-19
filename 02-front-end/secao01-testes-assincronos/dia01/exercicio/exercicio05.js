const imprime = (string) => console.log(string);

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// uppercase('oi', imprime);

module.exports = { uppercase, imprime };