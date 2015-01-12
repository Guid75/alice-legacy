Ext.define('Alice.model.Timeslot', {
	extend: 'Ext.data.Model',
	alias: 'model.timeslot',
	fields: [
		{ name: 'weekDay', type: 'int' },
		{ name: 'startTime', type: 'int' },
		{ name: 'endTime', type: 'int' }
	],
	proxy: {
		type: 'rest',
		noCache: false,
		url: '/timeslot',
		pageParam: '',
		startParam: 'skip',
		reader: {
			type: 'json'
		}
	}
});
