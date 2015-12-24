var React = require('react');
var BandStore = require('../stores/band');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/ApiUtil');
var AlbumForm = require('./AlbumForm');
var Video = require('./Video');
var Timeline = require('react-embedded-twitter-timeline');


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
    if (this.state.band.id) {
      bands.push(this.state.band);
    } else {
      return <div>loading...</div>;
    }
    var Link = ReactRouter.Link;
    var fbLink = "https://www.facebook.com/" + this.state.band.facebook;
    var twitterLink = "https://twitter.com/" + this.state.band.twitter;

    var twitterEmbed = (<a className="twitter-timeline" href={twitterLink}
      data-widget-id="679881850605572098">Tweets by @{this.state.band.twitter}</a>);
      
    var fbEmbed = (<div className="fb-page" data-href={fbLink}
      data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
      data-hide-cover="false" data-show-facepile="true">
      <div className="fb-xfbml-parse-ignore">
        <blockquote cite={fbLink}>
          <a href={fbLink}>this.state.band.username</a>
          </blockquote></div></div>);


    this.state.band.videos.forEach(function(video) {

      videos.push(
        <ul key={"video" + video.id}>
          <li><div dangerouslySetInnerHTML={{__html: video.link_src}} /></li>
          <li>Video Title: {video.title}</li>
          <li>Video Date: {video.date_made.slice(0,10)}</li>
        </ul>

      );
    });

    this.state.band.albums.forEach(function(album) {
      albums.push(
        <ul key={"album" + album.id}>
          <li><div dangerouslySetInnerHTML={{__html: album.link_src}} /></li>
          <li>Release Title: {album.title}</li>
          <li>Release Date: {album.date_made.slice(0,10)}</li>
        </ul>
      );
    });
    console.log(fbEmbed);
    return (
      <div>
        <Link to="/" >Back to Bands Index</Link> <br/>
        <Link to={"/album/new?bandId=" + this.state.band.id}>
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
          {fbEmbed}
          {twitterEmbed}

        </div>
    );
  }
});

module.exports = BandShow;
