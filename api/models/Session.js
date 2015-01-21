module.exports = {
	attributes: {
		workshop: {
			required: true,
			model: 'workshop'
		},

		students: {
			collection: 'student',
			via: 'sessions'
		}
	}
};
