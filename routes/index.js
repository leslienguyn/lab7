var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	data["viewAlt"] = false;
  	response.render('index', data);
};

exports.viewAlt = function(req, res){
	data["viewAlt"] = true;
	res.render("index", data);
}