var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filterConstants');

var FilterActions = {
  updateLocation: function (location_zip) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_NAME,
      name: name
    });
  }
};

module.exports = FilterActions;
