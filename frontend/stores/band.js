var Store = require('flux/utils').Store;
var _bands = [];
var CHANGE_EVENT = "change";
var BandConstants = require('../constants/band_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var BandStore = new Store(AppDispatcher);

var resetBands = function(bands) {
  _bands = bands.slice(0);
};

BandStore.all = function () {
  return _bands.slice(0);
};

BandStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BandConstants.BANDS_RECEIVED:
      var result = resetBands(payload.bands);
      BandStore.__emitChange();
      break;
  }
};

module.exports = BandStore;
