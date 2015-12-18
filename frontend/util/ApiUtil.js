var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
fetchBands: function (){
  $.get("api/bands", {}, function(bands) {
    ApiActions.receiveBands(bands);
  });
},
createBand: function(data) {
  $.post("api/bands", { band: data }, function(band) {
    ApiActions.receiveAll([band]);
  });
}



};


module.exports = ApiUtil;
