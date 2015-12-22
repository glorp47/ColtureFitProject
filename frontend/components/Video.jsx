var React = require("react");
var YouTube = require('react-youtube');


var Video = React.createClass({
  render: function () {
    var opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
      <YouTube
        videoId={this.props.code}
        opts={opts}
        onReady={this._onReady}
      /></div>
    );
  },

  _onReady: function (event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
});

module.exports = Video;
