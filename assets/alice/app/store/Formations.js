Ext.define('Alice.store.Formations', {
	extend: 'Ext.data.Store',
	alias: 'store.formations',
	requires: [
		'Alice.model.Formation'
	],
	model: 'Alice.model.Formation',
	autoLoad: true
});
