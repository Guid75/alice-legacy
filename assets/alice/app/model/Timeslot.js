Ext.define('Alice.model.Timeslot', {
	extend: 'Ext.data.Model',
	alias: 'model.timeslot',
	fields: [
		{ name: 'date', type: 'date', dateFormat: 'c' },
		{ name: 'duration', type: 'int' },
		{
			name: 'startTime',
			type: 'integer',
			depends: ['date'],
			convert: function (v, rec) {
				var d = rec.get('date');
				return d.getSeconds() + (60 * (d.getMinutes() + (60 * d.getHours())));
			}
		},
		{
			name: 'endTime',
			type: 'integer',
			depends: ['startTime', 'duration'],
			convert: function (v, rec) {
				return rec.get('startTime') + rec.get('duration');
			}
		}
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
