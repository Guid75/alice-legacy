Ext.define('Alice.model.Period', {
	extend: 'Ext.data.Model',
	alias: 'model.period',
	fields: [
		{ name: 'startDate', type: 'date', dateFormat: 'c' },
		{ name: 'endDate', type: 'date', dateFormat: 'c' }
	],
	proxy: {
		type: 'rest',
		noCache: false,
		pageParam: '',
		startParam: 'skip',
		url: '/period',
		reader: {
			type: 'json'
		}
	}
});
