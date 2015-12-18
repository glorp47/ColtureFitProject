var BandConstants = require('../constants/band_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receiveBands: function (bands) {
    AppDispatcher.dispatch({
      actionType: BandConstants.BANDS_RECEIVED,
      bands: bands
    });
  }

};

module.exports = ApiActions;
