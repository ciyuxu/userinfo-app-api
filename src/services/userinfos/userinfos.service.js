// Initializes the `userinfos` service on path `/userinfos`
const createService = require('feathers-mongoose');
const createModel = require('../../models/userinfos.model');
const hooks = require('./userinfos.hooks');
const filters = require('./userinfos.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'userinfos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/userinfos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('userinfos');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
