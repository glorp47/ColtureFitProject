var React = require('react');
var BandStore = require('../stores/band');
var ReactRouter = require('react-router');
var Band = require('./band');
var ApiUtil = require('../util/ApiUtil');

var BandShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var bandId = this.props.params.bandId;
    var band = this._findBandbyId(bandId) || {} ;
    return { band: band };
  },
  _findBandbyId: function (id) {
    var res;
    BandStore.all().forEach(function (band) {
      if (id == band.id) {
        res = band;
      }
    }.bind(this));
    return res;
  },
  componentDidMount: function() {
    this.bandListener = BandStore.addListener(this._bandChanged);
    ApiUtil.fetchBands();
  },
  componentWillUnmount: function() {
    this.bandListener.remove();
  },
  _bandChanged: function() {
    var bandId = this.props.param.bandId;
    var band = this._findBandbyId(bandId);
    this.setState({band: band});
  },
  render: function() {
    var bands = [];
    if (this.state.band) {
      bands.push(this.state.band);
    }
    var Link = ReactRouter.Link;

    return (
      <div>
        <Link to="/"  >Back to Bands Index</Link>
      </div>
    );
  }
});

module.exports = BandShow;
