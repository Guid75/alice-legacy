Ext.define('Alice.model.Workshop', {
	extend: 'Ext.data.Model',
	alias: 'model.workshop',
	fields: [
		'label'
	],
	requires: [
		'Alice.model.Session'
	],
	hasMany: [{
		model: 'Alice.model.Session',
		name: 'sessions'
	}],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/workshop',
		pageParam: '',
		startParam: 'skip',
		reader: {
			type: 'json'
		}
	}
});
