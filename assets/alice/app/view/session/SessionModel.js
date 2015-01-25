Ext.define('Alice.view.session.SessionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.session-session',
    data: {
        name: 'Alice'
    },
	requires: [
		'Alice.model.Student',
		'Alice.model.Timeslot'
	],
	stores: {
		'students': {
			model: 'Alice.model.Student',
			proxy: {
				type: 'rest',
				noCache: false,
				pageParam: '',
				startParam: 'skip',
				reader: {
					type: 'json'
				}
			}
		},
		'timeslots': {
			model: 'Alice.model.Timeslot',
			proxy: {
				type: 'rest',
				noCache: false,
				pageParam: '',
				startParam: 'skip',
				reader: {
					type: 'json'
				}
			}
		}
	}
});
