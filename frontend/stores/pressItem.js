var Store = require('flux/utils').Store;
var _pressItems = [];
var CHANGE_EVENT = "change";
var PressItemConstants = require('../constants/pressItemConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var PressItemStore = new Store(AppDispatcher);

var resetPressItems = function(pressItems) {
  _pressItems = pressItems.slice(0);
};

PressItemStore.all = function () {
  return _pressItems.slice(0);
};

PressItemStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PressItemConstants.PRESS_ITEMS_RECEIVED:
      var result = resetPressItems(payload.pressItem);
      PressItemStore.__emitChange();
      break;
  }
};

module.exports = PressItemStore;
