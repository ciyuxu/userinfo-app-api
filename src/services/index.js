const users = require('./users/users.service.js');
const addresses = require('./addresses/addresses.service.js');
const userinfos = require('./userinfos/userinfos.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(addresses);
  app.configure(userinfos);
};
