const assert = require('assert');
const app = require('../../src/app');

describe('\'userinfos\' service', () => {
  it('registered the service', () => {
    const service = app.service('userinfos');

    assert.ok(service, 'Registered the service');
  });
});
