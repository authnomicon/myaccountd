exports = module.exports = function(
  showProfile,
  federatedLoginService,
) {
  var service = require('express')();

  service.get('/profile', showProfile);
  
  service.use('/login', federatedLoginService);
    
  return service;
}

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/profile/show',
  'org.authnomicon/federated/http/service',
];
