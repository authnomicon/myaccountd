exports = module.exports = function(oauth2Store, oauthStore, IoC) {
  var OAuth2Strategy = require('passport-oauth2-userinfo').Strategy;
  
  
  return {
    create: function(provider, protocol, options) {
      protocol = protocol || 'oauth2';
      
      var strategy = new OAuth2Strategy({
          authorizationURL: 'http://localhost:8080/oauth2/authorize',
          tokenURL: 'http://localhost:8080/oauth2/token',
          userProfileURL: 'http://localhost:8080/api/userinfo',
          clientID: 's6BhdRkqt3',
          clientSecret: 'keyboardcat',
          callbackURL: '/oauth2/redirect'
        },
        function(accessToken, refreshToken, profile, cb) {
          return cb(null, profile);
        });
        
      return Promise.resolve(strategy);
    }
  };
};

exports['@singleton'] = true;
exports['@implements'] = 'http://i.authnomicon.org/sso/http/IDProviderFactory';
exports['@require'] = [
];
