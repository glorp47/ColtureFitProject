var BandConstants = require('../constants/band_constants');
var AlbumConstants = require('../constants/album_constants');
var GigConstants = require('../constants/gig_constants');
var ImageConstants = require('../constants/image_constants');
var SongConstants = require('../constants/song_constants');
var VideoConstants = require('../constants/video_constants');
var PressItemConstants = require('../constants/pressItemConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receiveBands: function (bands) {
    AppDispatcher.dispatch({
      actionType: BandConstants.BANDS_RECEIVED,
      bands: bands
    });
  },

  receiveAlbums: function (albums) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUMS_RECEIVED,
      albums: albums
    });
  },

  receiveGigs: function (gigs) {
    AppDispatcher.dispatch({
      actionType: GigConstants.GIGS_RECEIVED,
      gigs: gigs
    });
  },

  receiveImages: function (images) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGES_RECEIVED,
      images: images
    });
  },

  receivePressItems: function (pressItems) {
    AppDispatcher.dispatch({
      actionType: PressItemConstants.PRESS_ITEMS_RECEIVED,
      pressItems: pressItems
    });
  },

  receiveSongs: function (songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },

  receiveVideos: function (videos) {
    AppDispatcher.dispatch({
      actionType: VideoConstants.VIDEOS_RECEIVED,
      videos: videos
    });
  },

};

module.exports = ApiActions;
