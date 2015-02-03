/**
* Workshop.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		label: {
			type: 'string',
			required: true
		},
		period: {
			model: 'period'
		},
		sessions: {
			collection: 'session',
			via: 'workshop'
		}
	},

	afterDestroy: function (destroyedRecords, cb) {
		// Destroy any session whose workshop owner has an ID of one of the
        // deleted workshop models
        Session.destroy({ workshop: _.pluck(destroyedRecords, 'id') }).exec(cb);
	}
};
