Ext.define('Alice.model.Student', {
	extend: 'Ext.data.Model',
	alias: 'model.student',
	fields: [
		'firstName',
		'lastName',
		'login'
	],
	belongsTo: 'Class',
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/student',
		reader: {
			type: 'json'
		}
	}
});
