/**
 * TeacherController
 *
 * @description :: Server-side logic for managing teachers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	find: function (req, res) {
		var where;
		delete req.query['_dc'];
		delete req.query['page'];
		// TODO convert extjs pagination to sails pagination
		if (req.query['start']) {
			req.query['skip'] = req.query['start'];
			delete req.query['start'];
		}
		if (req.query['where']) {
			where = JSON.parse(req.query['where']);
		} else {
			where = req.query;
		}
		Teacher.find({ where: where }).then(function (data) {
			res.send(data);
		});
	}
};
