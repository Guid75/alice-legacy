Ext.define('Alice.model.Teacher', {
	extend: 'Ext.data.Model',
	alias: 'model.teacher',
	fields: [
		'firstName',
		'lastName',
		'login'
	],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/teacher',
		reader: {
			type: 'json'
		}
	}
});
