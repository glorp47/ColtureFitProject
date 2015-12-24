var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BandForm = React.createClass({
mixins: [LinkedStateMixin],
contextTypes: {
  router: React.PropTypes.func
},
getInitialState: function() {
  return {
    username: "",
    short_bio: "",
    location_zip: "00000",
    genre: "",
    members: "",
    discography: "",
    long_bio: ""
  };
},
handleSubmit: function(event) {
  event.preventDefault();
  var band = Object.assign({}, this.state);
  console.log(band);
  ApiUtil.createBand(band);
  this.navigateToSearch();
},
navigateToSearch: function() {
  this.props.history.pushState(null, "/");
},
handleCancel: function(event) {
  event.preventDefault();
  this.navigateToSearch();
},
render: function() {
  return (<div>
    <h3>Create Band</h3>
    <form onSubmit={this.handleSubmit}>
      <label>Email </label>
        <input type="text" valueLink={this.linkState('email')}/>
          <br/>
      <label>Name </label>
      <input type="text" valueLink={this.linkState('username')}/>
        <br/>
      <label>Short Bio </label>
        <input type="textarea" valueLink={this.linkState('short_bio')}/>
          <br/>
      <label>Long Bio </label>
        <input type="textarea" valueLink={this.linkState('long_bio')}/>
          <br/>
      <label>Location (Zip Code) </label>
        <input type="number" valueLink={this.linkState('location_zip')}/>
        <br/>
      <label>Genre
        <select name="band[genre]">
        <option value="rap">Rap/Hip-Hop</option>
        <option value="electronic">Electronic Music</option>
        <option value="punk">Punk Rock</option>
        <option value="indie">Indie Rock</option>
        <option value="hardrock">Hard Rock</option>
        <option value="jazz">Jazz Rock</option>
        <option value="funk">Funk Music</option>
        <option value="randb">Rhythm and Blues</option>
        <option value="metal">Metal</option>
        <option value="country">Country</option>
        <option value="singersongwriter">Singer-Songwriter</option>
        <option value="reggae">Reggae</option>
        <option value="symphonic">Symphonic</option>
        <option value="traditionalworld">Traditional World Music</option>
      </select>
    </label><br/>
      <label>Members </label>
      <input type="textarea" valueLink={this.linkState('members')}/> <br/>
      <input type="submit" value="create band"/>
    </form>
    <button onClick={this.handleCancel}>Cancel</button>
  </div>);
}


});

module.exports = BandForm;
