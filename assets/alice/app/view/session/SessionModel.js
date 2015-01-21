Ext.define('Alice.view.session.SessionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.session-session',
    data: {
        name: 'Alice'
    },
	requires: [
		'Alice.model.Student'
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
		}
	}
});
