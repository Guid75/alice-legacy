Ext.define('Alice.model.Class', {
	extend: 'Ext.data.Model',
	fields: [
		'label'
	],
	hasMany: [{
		model: 'Alice.model.Student',
		name: 'students'
	}],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/class',
		reader: {
			type: 'json'
		}
	}
});
