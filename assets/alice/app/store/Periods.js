Ext.define('Alice.store.Periods', {
	extend: 'Ext.data.Store',
	alias: 'store.periods',
	requires: [
		'Alice.model.Period'
	],
	model: 'Alice.model.Period',
	autoLoad: true
});
