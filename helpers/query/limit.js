
var helpers = require('../../lib/query-helpers');

helpers.register('limit', function(limit, values){
  if ( typeof limit === 'number' )
    return " top " + limit;
  else if ( typeof limit === 'string' && limit.toLowerCase() === "all" )
    return " ";
  else
    throw new Error('Invalid limit type `' + typeof limit  + '` for query helper `limit`. Limit must be number or \'all\'');
});
