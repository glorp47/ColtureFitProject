var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var _params = {location: ""};
var FilterConstants = require('../constants/filterConstants');

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FilterConstants.UPDATE_NAME:
    _params.name = payload.name;
    FilterParamsStore.__emitChange();
    break;
  }
};

module.exports = FilterParamsStore;
