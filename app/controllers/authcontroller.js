var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.login = function(req,res){

	res.render('login'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.admin = function(req,res){

	res.render('admin'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}