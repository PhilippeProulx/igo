
exports.game = function(req, res) {
  res.render('game', { gameID: req.params.id });
};

