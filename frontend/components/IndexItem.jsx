var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function() {
    var band = this.props.band;
    return (
      <div className="band-index-item" onClick={this.props.onClick}>
        {band.short_bio}
        <br/>
        </div>
    );
  }
});

module.exports = IndexItem;
