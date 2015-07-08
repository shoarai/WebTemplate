describe('app', function() {
  var text = 'text';
  
  beforeEach(function() {
    document.body.innerHTML = __html__['app/index.html'];
    // $('body').append(window.__html__['app/index.html']);
  });

  it('should sum numbers', function() {
    expect(app.sum(1, 2)).toBe(3);
  });

  it('should show message', function() {
    app.showMessage(text);
    expect($('#message').text()).toEqual(text);
  });

  it('should click message', function() {
    // $.ready();
    // $('#button').click();
    // expect($('#message').text()).toEqual('click');
  });

});