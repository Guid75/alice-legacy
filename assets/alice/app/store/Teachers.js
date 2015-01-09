Ext.define('Alice.store.Teachers', {
	extend: 'Ext.data.Store',
	alias: 'store.teachers',
	requires: [
		'Alice.model.Teacher'
	],
	model: 'Alice.model.Teacher',
	autoLoad: true,
    onCreateRecords: function(records, operation, success) {
		console.log('create');
        console.log(records);
    },
	onUpdateRecords: function(records, operation, success) {
		console.log('update');
		console.log(records);
    },
    onDestroyRecords: function(records, operation, success) {
		console.log('destroy');
        console.log(records);
    }
});
