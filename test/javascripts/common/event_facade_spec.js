describe('EventFacade', function() {


  beforeEach(function() {

    // clear all events
    facade = new EventFacade();
    facade.unbindAll();

  });

  it('should bind and trigger', function() {

    // Create facade
    facade = new EventFacade();
    expect(facade).not.toBe(null);

    // Event name and callback
    var eventName = 'test.event';

    // spy: callback
    callbackSpy = jasmine.createSpy();
    callbackSpy.and.callFake(function(e, data) {

      // assertions
      expect(data).not.toBe(null);
      expect(data.test).toBe(true);
    });

    // bind and trigger
    facade.bind(eventName, callbackSpy, this);
    facade.trigger(eventName, [
      { test: true }
    ]);

    // called?
    expect(callbackSpy).toHaveBeenCalled();

  });

  it('should unbind all events', function() {

    // Create facade
    facade = new EventFacade();

    // bind: fake event and spy
    var eventName = 'test.event';
    callbackSpy = jasmine.createSpy();
    facade.bind(eventName, callbackSpy, this);

    // unbind all
    facade.unbindAll();

    // trigger
    facade.trigger(eventName, [{ test: true }]);

    // didn't trigger?
    expect(callbackSpy).not.toHaveBeenCalled();

  });

});
