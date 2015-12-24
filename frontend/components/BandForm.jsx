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
    password: "",
    short_bio: "",
    location_zip: "00000",
    genre: "select",
    members: "",
    long_bio: "",
    twitter: "",
    facebook: "",
  };
},
change: function(event){
       this.setState({genre: event.target.value});
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
          <label>Password          </label>
            <input type="password" valueLink={this.linkState("password")}/>
          <br/>
      <label>Name </label>
      <input type="text" valueLink={this.linkState('username')}/>
        <br/>
      <label>Twitter </label>
      <input type="text" valueLink={this.linkState('twitter')}/>
        <br/>
      <label>Facebook </label>
      <input type="text" valueLink={this.linkState('facebook')}/>
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
      <label>Members </label>
      <input type="textarea" valueLink={this.linkState('members')}/> <br/>

        <label>Select Account Type
          <select name="band[genre]" onChange={this.change} value={this.state.genre}>
          <option value="select">Select</option>
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
      </label> <br/>

      <input type="submit" value="create band"/>
    </form>
    <button onClick={this.handleCancel}>Cancel</button>
  </div>);
}


});

module.exports = BandForm;
