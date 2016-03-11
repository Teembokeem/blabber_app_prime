var Blab = require('../models/blab');

module.exports = {
  index: index
};

function index(req, res, next) {
  Blab
  .find({})
  .then(
    function(blabs) {res.json(blabs)},
    function(err) {console.log(err)}
  );
}
