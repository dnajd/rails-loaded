/**
 * Mix - mixes options into function
 * @param {json} options - Willy-nilly options you wanna have
 * @param {object} object - Object to mix willy-nilly options in
 */

function mix(options, object) {
  options = options || {};

  // mix options into the object
  for (var key in options) {
    object[key] = options[key];
  }
}


/**
 * debounce - acts as a buffer for rapid-fire events
 * @param {func} - the function you want to debounce
 * @param {wait} - number of milliseconds to wait
 * @param {immediate} - for immediate execution
 *
 * Usage
 *
 * var myFunc = debounce(function() {
 *   console.log('window resize');
 * }, 500);
 *
 * window.addEventListener('resize', myFunc);
 */

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}



/**
 * redirect - used for all redirects; required for mocking in jasmine tests
 * @param {string} uri
 */
function redirect(uri) {
  document.location.href = uri;
}
