/**
 * Teacher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	attributes: {
		weekDay: {
			type: 'integer',
			required: true
		},
		startTime: {
			type: 'integer',
			required: true
		},
		endTime: {
			type: 'integer',
			required: true
		}
	}
};
