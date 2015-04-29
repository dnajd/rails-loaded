/**
 * Creates a new EventFacade. Provides debugging and logs events to condsole.
 * @class
 */

function EventFacade(options) {
  this.enableDebug = false;
  mix(options, this); // mix
}
EventFacade.fn = EventFacade.prototype;

/**
 * @function EventFacade.bind
 * bind an event to the document object
 * @param {string} eventName - Listen for this event
 * @param {function} callback - Callback function
 * @param {string} context - Context
 */
EventFacade.fn.bind = function(eventName, callback, context, target) {

  // enableDebug
  if (this.enableDebug)
    this.debug('%cbind: ' + eventName, 'color: #91cc83; font-weight: bold; line-height: 1.5');

  // EVENTS
  if (target)
    $(target).bind(eventName, $.proxy(callback, context));
  else
    $(document).bind(eventName, $.proxy(callback, context));
};

/**
 * @function EventFacade.trigger
 * trigger an event against the document object
 * @param {string} eventName - Name of event to trigger
 * @param {function} argsArray - Array of arguments
 */
EventFacade.fn.trigger = function(eventName, argsArray) {

  // enableDebug
  if (this.enableDebug)
    this.debug('%ctrigger: ' + eventName, 'color: #00a7e1; font-weight: bold; line-height: 1.5');

  // EVENTS
  $(document).trigger(eventName, argsArray);
};


/**
 * @function EventFacade.unbindAll
 * unbind all events on the document object
 */
EventFacade.fn.unbindAll = function() {
  $(document).unbind();
};

/**
 * @function EventFacade.debug
 */
EventFacade.fn.debug = function(msg){
  if (this.enableDebug)
    console.log('prototype=EventFacade|' + msg);
};
