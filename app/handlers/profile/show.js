exports = module.exports = function() {
  
  function respond(req, res, next) {
    res.send('Hello');
  }
  
  return [ respond ];
};

exports['@require'] = [
];
