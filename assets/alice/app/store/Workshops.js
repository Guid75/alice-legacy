Ext.define('Alice.store.Workshops', {
	extend: 'Ext.data.Store',
	alias: 'store.workshops',
	requires: [
		'Alice.model.Workshop'
	],
	model: 'Alice.model.Workshop',
	autoLoad: true
});
