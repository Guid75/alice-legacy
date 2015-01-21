Ext.define('Alice.model.Session', {
	extend: 'Ext.data.Model',
	alias: 'model.session',
	fields: [
		'login'
	],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/session',
		reader: {
			type: 'json'
		}
	}
});
