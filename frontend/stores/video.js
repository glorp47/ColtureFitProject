var Store = require('flux/utils').Store;
var _videos = [];
var CHANGE_EVENT = "change";
var VideoConstants = require('../constants/video_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var VideoStore = new Store(AppDispatcher);

var resetVideos = function(videos) {
  _videos = videos.slice(0);
};

VideoStore.all = function () {
  return _videos.slice(0);
};

VideoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case VideoConstants.VIDEOS_RECEIVED:
      var result = resetVideos(payload.videos);
      VideoStore.__emitChange();
      break;
  }
};

module.exports = VideoStore;
