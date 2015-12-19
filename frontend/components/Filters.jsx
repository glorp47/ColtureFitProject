var React = require('react');
var FilterActions = require('../actions/filterActions');

var Filters = React.createClass({
  nameChanged: function(e) {
    FilterActions.updateLocation(e.target.value);
  },
  currentName: function () {
    return this.props.filterParams.username;
  },
  updateParams: function(username) {
    FilterActions.updateParams({
      params: {location: username}
    });
  },
  render: function() {
    return (
      <div>
        <label>Name</label>
        <input type="name"
          onChange={this.locationChanged}
          value={this.username()}/>
      </div>
    );
  }
});

module.exports = Filters;
