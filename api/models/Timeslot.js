/**
 * Teacher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	attributes: {
		date: {
			type: 'datetime',
			required: true
		},
		duration: {
			type: 'integer',
			required: true
		},
		period: {
			model: 'period'
		},
		sessions: {
			collection: 'session',
			via: 'timeslots'
		}
	}
};
