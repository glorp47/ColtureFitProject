var React = require('react');
var BandStore = require('../stores/band');
var ReactRouter = require('react-router');
var Band = require('./band');
var ApiUtil = require('../util/ApiUtil');

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
  render: function() {
    var bands = [];
    var albums = [];
    if (this.state.band) {
      bands.push(this.state.band);
    }
    var Link = ReactRouter.Link;
    this.state.band.albums.forEach(function(album) {
      albums.push(
        <ul>
          <li>Album Name: {album.title}</li>
          <li>Album Date: {album.date_made.slice(0,10)}</li>
          <li>Album Embed link: {album.link_src}</li>
          <li>Album Picture: {album.img_src}</li>
        </ul>
      );
    });
    return (
      <div>
        <Link to="/"  >Back to Bands Index</Link>
        <ul>
          <li>Name: {this.state.band.username}</li>
          <li>Short Bio: {this.state.band.short_bio}</li>
          <li>Location: {this.state.band.location_zip}</li>
          <li>Genre: {this.state.band.genre}</li>
          <li>Members: {this.state.band.members}</li>
          <li>Long Bio: {this.state.band.long_bio}</li>
          <li>Discography: {this.state.band.discography}</li>
        </ul>
        <div>{albums}</div>
      </div>
    );
  }
});

module.exports = BandShow;
