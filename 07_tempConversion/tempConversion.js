const convertToCelsius = function (fh) {
  let celsius = (fh - 32) * 5 / 9;
  celsius = (Math.round(celsius * 100) / 100).toFixed(1);
  return Number(celsius);

};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = ((celsius * 9 / 5) + 32);
  fahrenheit = (Math.round(fahrenheit * 100) / 100).toFixed(1);
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
