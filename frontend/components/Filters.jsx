var React = require('react');
var FilterActions = require('../actions/filterActions');

var Filters = React.createClass({
  locationChanged: function(e) {
    FilterActions.updateLocation(e.target.value);
  },
  currentZipCode: function () {
    return this.props.filterParams.location_zip;
  },
  updateParams: function(location_zip) {
    FilterActions.updateParams({
      params: {location: location_zip}
    });
  },
  render: function() {
    return (
      <div>
        <label>Zip Code</label>
        <input type="number"
          onChange={this.locationChanged}
          value={this.currentZipCode()}/>
      </div>
    );
  }
});

module.exports = Filters;
