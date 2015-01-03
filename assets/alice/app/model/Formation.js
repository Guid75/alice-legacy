Ext.define('Alice.model.Formation', {
	extend: 'Ext.data.Model',
	fields: [
		'label'
	],
	requires: [
		'Alice.model.Student'
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
