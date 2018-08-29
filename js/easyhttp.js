// Constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request -> asynchronous
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (this.status === 200) {
      callback(null, this.responseText);
    } else {
      callback(`Error: ${this.status}`);
    }
  }

  this.http.send();
}
// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request