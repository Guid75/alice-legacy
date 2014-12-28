Ext.define('Alice.store.Classes', {
	extend: 'Ext.data.Store',
	alias: 'store.Classes',
	requires: [
		'Alice.model.Class'
	],
	model: 'Alice.model.Class',
	autoLoad: true
});
