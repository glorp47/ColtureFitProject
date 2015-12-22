var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/Search');
var BandForm = require('./components/BandForm');
var BandShow = require('./components/BandShow');
var AlbumForm = require('./components/AlbumForm');
var YouTube = require('react-youtube');
var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>ColtureFit</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="/band/new" component={BandForm}/>
    <Route path="/band/:bandId" component={BandShow}/>
      <Route path="/band/:bandId/album/new" component={AlbumForm}/>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
