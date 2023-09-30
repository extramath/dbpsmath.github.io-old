/* Hello epic hacker (maybe skid), this code is supposed to be readable (aside from getAllUrlParams lol)
First, we start off by defining queryString as this is highly used by getAllUrlParams
 */


const queryString = window.location.search;

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];
  
      // split our query string into its component parts
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');
  
        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
  
        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {
  
          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }
  
    return obj;
  }

// Take url params for what game to use
// Example URL: dbpsmath.github.io/assets/gameframe?game=games/2048/index.html(link to game, from root)
// Not implemented rn, const cdn = getAllUrlParams(window.location.href).cdn; // https://example.com
const game = getAllUrlParams(window.location.href).game; // 'games/2048/index.html'
// const usingCDN = getAllUrlParams(window.location.href).usingCDN - true or false, not implemented for now

window.onload = function() {
var iframe = window.document.createElement('iframe');
iframe.style.border = 'none';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.margin = '0';
url = "../../"
url += game
iframe.src = url
const frameDiv = document.getElementById("frame");
window.document.frameDiv.appendChild(iframe)
}


