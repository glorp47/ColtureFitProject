var React = require('react');
var ReactRouter = require('react-router');

var Band = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div>
        <ul>
          <li>Name: {this.props.band.username}</li>
          <li>Short Bio: {this.props.band.short_bio}</li>
          <li>Location: {this.props.band.location_zip}</li>
          <li>Genre: {this.props.band.genre}</li>
          <li>Members: {this.props.band.members}</li>
          <li>Long Bio: {this.props.band.long_bio}</li>
          <li>Discography: {this.props.band.discography}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Band;
