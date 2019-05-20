
var helpers = require('../../lib/query-helpers');

helpers.register('offset', function(offset, values){
  return ` offset ${offset}`;
});

helpers.register('offsetLimit', function(offsetLimit, values){
  return ` offset ${offsetLimit[0]} limit ${offsetLimit[1]}`;
});
