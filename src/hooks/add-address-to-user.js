module.exports = function (options = {}) {
  return function addAddressToUser (hook) {
  
    const addressId = hook.result._id;
    const userId = hook.data.userId;
  
    if(!userId) { return hook; }
  
    else {
      return hook.app.service('users').patch(userId, {
        $addToSet: { addressIds: addressId },
      }).then(() => {
        return hook;
      });
    }
  };
};