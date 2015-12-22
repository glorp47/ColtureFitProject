var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
fetchBands: function (){
  $.get("api/bands", {}, function(bands) {
    ApiActions.receiveBands(bands);
  });
},
createBand: function(data) {
  $.post("api/bands", { band: data }, function(band) {
    ApiActions.receiveBands([band]);
  });
},
fetchAlbums: function (){
  $.get("api/albums", {}, function(albums) {
    ApiActions.receiveAlbums(albums);
  });
},
createAlbum: function(data) {
  $.post("api/albums", { album: data }, function(album) {
    ApiActions.receiveAlbums([album]);
  });
},
fetchGigs: function (){
  $.get("api/gigs", {}, function(gigs) {
    ApiActions.receiveGigs(gigs);
  });
},
createGig: function(data) {
  $.post("api/gigs", { gig: data }, function(gig) {
    ApiActions.receiveGigs([gig]);
  });
},
fetchImages: function (){
  $.get("api/images", {}, function(images) {
    ApiActions.receiveImages(images);
  });
},
createImage: function(data) {
  $.post("api/images", { image: data }, function(image) {
    ApiActions.receiveImages([image]);
  });
},
fetchSongs: function (){
  $.get("api/songs", {}, function(songs) {
    ApiActions.receiveSongs(songs);
  });
},
createSong: function(data) {
  $.post("api/songs", { song: data }, function(song) {
    ApiActions.receiveSongs([song]);
  });
},
fetchPressItems: function (){
  $.get("api/press_items", {}, function(pressItems) {
    ApiActions.receivePressItems(pressItems);
  });
},
createPressItem: function(data) {
  $.post("api/press_items", { pressItem: data }, function(pressItem) {
    ApiActions.receivePressItems([pressItem]);
  });
},
fetchVideos: function (){
  $.get("api/videos", {}, function(videos) {
    ApiActions.receiveVideos(videos);
  });
},
createVideo: function(data) {
  $.post("api/videos", { video: data }, function(video) {
    ApiActions.receiveVideos([video]);
  });
},


};


module.exports = ApiUtil;
