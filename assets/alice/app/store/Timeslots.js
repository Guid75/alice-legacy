Ext.define('Alice.store.Timeslots', {
	extend: 'Ext.data.Store',
	alias: 'store.timeslots',
	requires: [
		'Alice.model.Timeslot'
	],
	model: 'Alice.model.Timeslot',
	autoLoad: true,
	sorters: 'date'
});
