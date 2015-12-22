var React = require('react');
var BandStore = require('../stores/band');
var FilterParamsStore = require('../stores/filter_params');
var ApiUtil = require('../util/ApiUtil');
var Filters = require('./Filters');
var Index = require('./Index.jsx');
var BandForm = require('./BandForm');
var ReactRouter = require('react-router');

function _getAllBands() {
  return BandStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  _bandsChanged: function(){
    this.setState({bands: _getAllBands()});
  },
  _filtersChanged: function() {
    var newParams = _getFilterParams();
    this.setState({filterParams: newParams });
    ApiUtil.fetchBands();
  },
  getInitialState: function() {
    return {
      bands: _getAllBands(),
      filterParams: _getFilterParams(),
    };
  },
  componentDidMount: function() {
    this.bandListener = BandStore.addListener(this._bandsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiUtil.fetchBands();
  },
  componentWillUnmount: function() {
    this.bandListener.remove();
    this.filterListener.remove();
  },
  render: function(){
    var Link = ReactRouter.Link;
    return (
      <div>
        <Link to="/band/new">Create New Band</Link>
        <Index bands={this.state.bands} history={this.props.history}/>
      </div>
    );
  }

});

module.exports = Search;
