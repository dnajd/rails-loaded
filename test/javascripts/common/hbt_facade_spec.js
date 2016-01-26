describe('HbtFacade', function() {

  beforeEach(function() {

    jasmine.getJSONFixtures().fixturesPath = "test/javascripts/fixtures/sample";
    jasmine.getFixtures().fixturesPath = "test/javascripts/fixtures/sample";

    // clear all events
    facade = new EventFacade();
    facade.unbindAll();

    fixtures = {
      json: getJSONFixture('welcome.json')
    };

    loadFixtures('welcome.html'); // html in dom
  });

  it('should render template with div and welcome message', function() {

    // construct
    facade = new HbtFacade();
    expect(facade).not.toBe(null);

    // render
    html = facade.render('sample/welcome', fixtures.json );
    $('#welcome-container').append(html);

    // div?
    expect($('#template-div')).not.toBe(null);

  });
});
