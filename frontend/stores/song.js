var Store = require('flux/utils').Store;
var _songs = [];
var CHANGE_EVENT = "change";
var SongConstants = require('../constants/song_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var SongStore = new Store(AppDispatcher);

var resetSongs = function(songs) {
  _songs = songs.slice(0);
};

SongStore.all = function () {
  return _songs.slice(0);
};

SongStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      var result = resetSongs(payload.songs);
      SongStore.__emitChange();
      break;
  }
};

module.exports = SongStore;
