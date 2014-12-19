/**
 * ClassController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	find: function (req, res) {
		delete req.query['_dc'];
		delete req.query['page'];
		// TODO convert extjs pagination to sails pagination
		if (req.query['start']) {
			req.query['skip'] = req.query['start'];
			delete req.query['start'];
		}
		Class.find({ where: req.query }).populate('students').then(function (data) {
			res.send(data);
		});
	}
};
