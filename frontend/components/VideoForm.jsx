var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var VideoForm = React.createClass({
mixins: [LinkedStateMixin],
contextTypes: {
  router: React.PropTypes.func
},
getInitialState: function() {
  return {
    band_id: this.props.location.query.bandId,
    title: "",
    long_bio: "",
    date_made: "31 Dec 2015",
    link_src: "",
  };
},
handleSubmit: function(event) {
  event.preventDefault();
  var video = Object.assign({}, this.state);
  ApiUtil.createVideo(video);
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
    <h3>Create Video</h3>
    <form onSubmit={this.handleSubmit}>
      <label>Title</label>
      <input type="text" valueLink={this.linkState('title')}/>
        <br/>
      <label>Long Bio</label>
        <input type="textarea" valueLink={this.linkState('long_bio')}/>
          <br/>
      <label>Date made (Day Mon Year)</label>
        <input type="text" valueLink={this.linkState('date_made')}/>
        <br/>
      <label>Video Embed Code</label>
      <input type="text" valueLink={this.linkState('link_src')}/><br/>
      <input type="submit" value="create video"/>
    </form>
    <button onClick={this.handleCancel}>Cancel</button>
  </div>);
}


});

module.exports = VideoForm;
