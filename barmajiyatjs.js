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

function isUnsignedInt(number) {
  var result = false;
  if ($.isNumeric(number) && Math.floor(number) == number && number > 0) {
    result = true;
  }
  return result;
}

function formatToCurrency(n, x) {
  if ($.isNumeric(n)) {
    n = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    n = this.toFixed(Math.max(0, ~~n)).replace(new RegExp(n, 'g'), '$&,');
  }

  return n;
}

function emptyDataTable(id) {
  var table = $('#' + id).DataTable();
  table.clear().draw();
}