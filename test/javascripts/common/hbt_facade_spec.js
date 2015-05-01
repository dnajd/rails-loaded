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
