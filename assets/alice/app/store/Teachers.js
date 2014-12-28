Ext.define('Alice.store.Teachers', {
	extend: 'Ext.data.Store',
	alias: 'store.teachers',
	requires: [
		'Alice.model.Teacher'
	],
	model: 'Alice.model.Teacher',
	autoLoad: true
});
