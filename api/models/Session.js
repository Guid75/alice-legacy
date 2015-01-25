module.exports = {
	attributes: {
		workshop: {
			required: true,
			model: 'workshop'
		},
		students: {
			collection: 'student',
			via: 'sessions'
		},
		timeslots: {
			collection: 'timeslot',
			via: 'sessions'
		}
	}
};
