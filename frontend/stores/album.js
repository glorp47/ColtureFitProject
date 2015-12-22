var Store = require('flux/utils').Store;
var _albums = [];
var CHANGE_EVENT = "change";
var AlbumConstants = require('../constants/album_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var AlbumStore = new Store(AppDispatcher);

var resetAlbums = function(albums) {
  _albums = albums.slice(0);
};

AlbumStore.all = function () {
  return _albums.slice(0);
};

AlbumStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AlbumConstants.ALBUMS_RECEIVED:
      var result = resetAlbums(payload.albums);
      AlbumStore.__emitChange();
      break;
  }
};

module.exports = AlbumStore;
