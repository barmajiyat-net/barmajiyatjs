/*!
 * Developed by Barmajiyat.net team
 * https://barmajiyat.net
 * Nov 19, 2021
 */

function getRandomNumber(min, max, decimalPlaces) {
  return (Math.random() * max + min + Math.random()).toFixed(decimalPlaces);
}

function getRandomInt(min, max) {
  return getRandomNumber(min, max, 0);
}


function getURLParams(url) {
  var search = new URL(url).search;
  var searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams.entries());
}

function getCurrentURLParams() {
  var search = new URL(location.href).search;
  var searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams.entries());
}

function getURLParam(paramName, url) {
  var search = new URL(url).search;
  var searchParams = new URLSearchParams(search);
  var value = null;
  if (searchParams.has(paramName)) {
    value = searchParams.get(paramName);
  }
  return value;
}

function getParamFromCurrentURL(paramName) {
  return getURLParam(paramName, location.href);
}

function isValidEmail(email) {
  email = email.trim();
  var regex = /\w*\.*\w*-*\w*\.*@\w*\.*\w*-*\w*\.*\.\w*/;//\S+@\S+\.\S+/;
  return regex.test(email);
}
