var React = require('react');
var IndexItem = require('./IndexItem');

var Index = React.createClass({
  handleItemClick: function (band) {
    this.props.history.pushState(null, "band/" + band.id);
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    return (
      <div>
        <h1>Index</h1>
        {
          this.props.bands.map(function(band){
            var boundClick = handleItemClick.bind(null, band);
            return <IndexItem
              onClick={boundClick}
              band={band}
              key={band.id} />;
          })
        }
      </div>
    );
  }
});

module.exports = Index;
