describe('Common', function() {

  describe('Mix', function() {

    beforeEach(function() {

      // clear all events
      facade = new EventFacade();
      facade.unbindAll();
      globalConfig = {
        apiBaseUrl: 'http://www.nothing.com'
      };

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

  describe('EventFacade', function() {

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

  describe('HbtFacade', function() {

    it('should render template with div and welcome message', function() {

      // construct
      facade = new HbtFacade();
      expect(facade).not.toBe(null);

      // render
      html = facade.render('sample/welcome', { message: 'hello'} );

      // div?
      element = $(html).find('div');
      expect(element).not.toBe(null);

    });
  });

});
