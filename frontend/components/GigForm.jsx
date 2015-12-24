var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var GigForm = React.createClass({
mixins: [LinkedStateMixin],
contextTypes: {
  router: React.PropTypes.func
},
getInitialState: function() {
  return {
    band_id: this.props.location.query.bandId,
    title: "",
    address: "",
    date: "31 Dec 2015",
    link_src: "",
    description: ""
  };
},
handleSubmit: function(event) {
  event.preventDefault();
  var gig = Object.assign({}, this.state);
  ApiUtil.createGig(gig);
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
    <h3>Create Gig</h3>
    <form onSubmit={this.handleSubmit}>
      <label>Title</label>
      <input type="text" valueLink={this.linkState('title')}/>
        <br/>
      <label>Description</label>
        <input type="textarea" valueLink={this.linkState('description')}/>
          <br/>
      <label>Date made (Day Mon Year)</label>
        <input type="text" valueLink={this.linkState('date')}/>
        <br/>
      <label>Link for info</label>
      <input type="text" valueLink={this.linkState('link_src')}/><br/>
        <label>Address</label>
        <input type="text" valueLink={this.linkState('address')}/><br/>
      <input type="submit" value="create gig"/>
    </form>
    <button onClick={this.handleCancel}>Cancel</button>
  </div>);
}


});

module.exports = GigForm;
