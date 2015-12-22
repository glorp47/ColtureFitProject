var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var AlbumForm = React.createClass({
mixins: [LinkedStateMixin],
contextTypes: {
  router: React.PropTypes.func
},
getInitialState: function() {
  return {
    band_id: 0,
    title: "",
    long_bio: "",
    date_made: "31 Dec 2015",
    link_src: "",
    img_src: "",
  };
},
handleSubmit: function(event) {
  event.preventDefault();
  var album = Object.assign({}, this.state);
  ApiUtil.createAlbum(album);
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
    <h3>Create Album</h3>
    <form onSubmit={this.handleSubmit}>
      <input type="hidden" name="band_id" value={this.props.params.bandId}/>
      <label>Title</label>
      <input type="text" valueLink={this.linkState('title')}/>
        <br/>
      <label>Long Bio</label>
        <input type="textarea" valueLink={this.linkState('long_bio')}/>
          <br/>
      <label>Date made (Day Mon Year)</label>
        <input type="text" valueLink={this.linkState('date_made')}/>
        <br/>
    <br/>
      <label>Link to Album</label>
      <input type="text" valueLink={this.linkState('link_src')}/><br/>
        <label>Link to Image</label>
        <input type="text" valueLink={this.linkState('img_src')}/><br/>
      <input type="submit" value="create album"/>
    </form>
    <button onClick={this.handleCancel}>Cancel</button>
  </div>);
}


});

module.exports = AlbumForm;
