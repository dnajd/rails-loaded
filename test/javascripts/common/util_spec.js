describe('Util', function() {


  beforeEach(function() {

    // clear all events
    facade = new EventFacade();
    facade.unbindAll();

  });

  it('should mix in json', function() {

    // Create prototype
    function MyObject(options) {
      mix(options, this); // mix
    }

    MyObject.prototype = {};

    // Mix in json
    o = new MyObject({
      test: true,
      name: 'Bob'
    });

    // Assertions
    expect(o.test).toBe(true);
    expect(o.name).toBe('Bob');

  });

});
