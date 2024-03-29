Ext.define('Alice.model.Student', {
	extend: 'Ext.data.Model',
	alias: 'model.student',
	fields: [
		'firstName',
		'lastName',
		'class',
		'login'
	],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/student',
		reader: {
			type: 'json'
		}
	}
});
