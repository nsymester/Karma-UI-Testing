describe('expect Hello world', function() {
  it('should be 11 characters long', function() {
    expect('Hello world').to.have.length(11);
  });
});
