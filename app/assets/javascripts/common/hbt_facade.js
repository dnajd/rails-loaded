/**
 * Creates a new HbtFacade. Handles handlebar templates.
 * @class
 */

function HbtFacade(options) {
  this.enableDebug = false;
  mix(options, this); // mix
}
HbtFacade.fn = HbtFacade.prototype;



/**
 * @function HbtFacade.render
 * renders a handlebar template
 * @returns handlebar template
 */
HbtFacade.fn.render = function(template, data) {

  if (this.enableDebug) {
    this.debug('%ctemplate: ' + template, 'color: #ff7e29; font-weight: bold; line-height: 1.5');
    this.debug('%cdata: ' + JSON.stringify(data), 'color: #bbb; line-height: 1.5');
  }

  return SHT[template](data);
};

/**
 * @function HbtFacade.debug
 */
HbtFacade.fn.debug = function(msg){
  if (this.enableDebug)
    console.log('prototype=HbtFacade|' + msg);
};


/**
 * handlebars helper - if condition
 */
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});
