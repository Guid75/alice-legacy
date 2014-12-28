/**
 * TeacherController
 *
 * @description :: Server-side logic for managing teachers
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
		Teacher.find({ where: req.query }).then(function (data) {
			res.send(data);
		});
	}
};
