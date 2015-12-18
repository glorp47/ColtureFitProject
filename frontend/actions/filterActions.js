var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filterConstants');

var FilterActions = {
  updateLocation: function (location_zip) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_LOCATION,
      location_zip: location_zip
    });
  }
};

module.exports = FilterActions;
