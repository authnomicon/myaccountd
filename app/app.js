exports = module.exports = function(
  showProfile
) {
  var service = require('express')();

  service.get('/profile', showProfile);
    
  return service;
}

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/profile/show',
];
