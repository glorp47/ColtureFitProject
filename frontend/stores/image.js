var Store = require('flux/utils').Store;
var _images = [];
var CHANGE_EVENT = "change";
var ImageConstants = require('../constants/image_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ImageStore = new Store(AppDispatcher);

var resetImages = function(images) {
  _images = images.slice(0);
};

ImageStore.all = function () {
  return _images.slice(0);
};

ImageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      var result = resetImages(payload.images);
      ImageStore.__emitChange();
      break;
  }
};

module.exports = ImageStore;
