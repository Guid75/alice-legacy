module.exports = {
	attributes: {
		firstName: {
			type: 'string',
			required: true
		},
		lastName: {
			type: 'string',
			required: true
		},
		login: {
			type: 'string',
			required: true
		},
		class: {
			model: 'class'
		},
		sessions: {
			collection: 'session',
			via: 'students'
		}
	}
};
