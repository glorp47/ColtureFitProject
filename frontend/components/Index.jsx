var React = require('react');
var IndexItem = require('./IndexItem');

var Index = React.createClass({
  handleItemClick: function (band) {
    this.props.history.pushState(null, "band/" + band.id);
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    var bands;
    if (this.props.bands.length > 0)
    {bands = this.props.bands.map(function (band, key) {
        return (
            <IndexItem key={key} band={band}
              clicked={handleItemClick.bind(null, band)}/>
        );
      });
    }
    console.log(bands);
    return (
      <div>
        <h1>Index</h1>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
});

module.exports = Index;
