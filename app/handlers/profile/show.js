exports = module.exports = function() {
  
  function respond(req, res, next) {
    res.send('<a href="/login">Login</a>');
    //res.send('Hello');
  }
  
  return [ respond ];
};

exports['@require'] = [
];
