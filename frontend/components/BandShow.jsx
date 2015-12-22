var React = require('react');
var BandStore = require('../stores/band');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/ApiUtil');
var AlbumForm = require('./AlbumForm');
var Video = require('./Video');


var BandShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },


  getInitialState: function () {
    var bandId = this.props.params.bandId;
    var band = this._findBandbyId(bandId) || {} ;
    return { band: band };
  },
  _findBandbyId: function (id) {
    var res;
    BandStore.all().forEach(function (band) {
      if (id == band.id) {
        res = band;
      }
    }.bind(this));
    return res;
  },
  componentDidMount: function() {
    this.bandListener = BandStore.addListener(this._bandChanged);
    ApiUtil.fetchBands();
  },
  componentWillUnmount: function() {
    this.bandListener.remove();
  },
  _bandChanged: function() {
    var bandId = this.props.params.bandId;
    var band = this._findBandbyId(bandId);
    this.setState({band: band});
  },

  _onReady: function (event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
},

  render: function() {
    var bands = [];
    var albums = [];
    var videos = [];
    if (this.state.band) {
      bands.push(this.state.band);
    }
    var Link = ReactRouter.Link;
    var opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    this.state.band.videos.forEach(function(video) {
      videos.push(
        <ul>
          <li>Video Title: {video.title}</li>
          <li>Video Date: {video.date_made.slice(0,10)}</li>
          <li>Video Link: {video.link_src}</li>
        </ul>

      );
    });

    this.state.band.albums.forEach(function(album) {
      albums.push(
        <ul>
          <li>Release Picture: {album.img_src}</li>
          <li>Release Title: {album.title}</li>
          <li>Release Date: {album.date_made.slice(0,10)}</li>
          <li>Release Embed link: {album.link_src}</li>
        </ul>
      );
    });
    var twitterHrefLink = "https://twitter.com/" + this.state.band.twitter;
    return (
      <div>
        <Link to="/"  >Back to Bands Index</Link> <br/>
        <Link to="/band/:bandId/album/new"  >
          Create new Album for {this.state.band.username}</Link>
        <ul>
          <li>Name: {this.state.band.username}</li>
          <li>Short Bio: {this.state.band.short_bio}</li>
          <li>Location: {this.state.band.location_zip}</li>
          <li>Genre: {this.state.band.genre}</li>
          <li>Members: {this.state.band.members}</li>
          <li>Long Bio: {this.state.band.long_bio}</li>
        </ul>
          <div className= "wrapper">
            <div  className="album-list">{albums}</div>
            <div  className="video-list">{videos}</div>
          </div>
        </div>
    );
  }
});

module.exports = BandShow;
