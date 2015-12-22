var Store = require('flux/utils').Store;
var _gigs = [];
var CHANGE_EVENT = "change";
var GigConstants = require('../constants/gig_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var GigStore = new Store(AppDispatcher);

var resetGigs = function(gigs) {
  _gigs = gigs.slice(0);
};

GigStore.all = function () {
  return _gigs.slice(0);
};

GigStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case GigConstants.GIGS_RECEIVED:
      var result = resetGigs(payload.gigs);
      GigStore.__emitChange();
      break;
  }
};

module.exports = GigStore;
