'use strict';

describe('Service: commands', function () {

  // load the service's module
  beforeEach(module('zorkgularApp'));

  // instantiate service
  var commands;
  beforeEach(inject(function (_commands_) {
    commands = _commands_;
  }));

  it('should do something', function () {
    expect(!!commands).toBe(true);
  });

});
