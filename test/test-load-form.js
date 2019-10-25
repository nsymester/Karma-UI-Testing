'use strict';

// - group together related tests
describe('Validate Form', () => {
  beforeEach(() => {
    fixture.base = 'fixtures';
    fixture.load('form/index.html');
  });

  // 5. execute test(s)
  it('hides error banner on initial state', function() {
    // initial state
    expect($('#err').hasClass('hidden')).to.be.true;
  });

  it('shows error banner after submitting blank form', () => {
    // submit blank form, get an error

    $('form').submit();
    expect($('#err').hasClass('hidden')).to.be.false;
  });

  it('shows no error banner after submitting form', () => {
    $('#username').val('Bob');
    $('#password').val('123456');
    $('form').submit();
    expect($('#err').hasClass('hidden')).to.be.true;
  });

  afterEach(() => {
    fixture.cleanup();
  });
});
