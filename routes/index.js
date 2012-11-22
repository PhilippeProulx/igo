
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '囲碁 -- play go online' });
};
