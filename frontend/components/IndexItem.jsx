var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.History],
  render: function() {
    var band = this.props.band;
    console.log(band.images);
    return (
      <li key={band.id} className="band-index-item"
        onClick={this.props.clicked} band={this.props.band}>
        <img src = {band.images[0].link_src}/> <br/>
        {band.username} - {band.genre}
      </li>
    );
  }
});

module.exports = IndexItem;
