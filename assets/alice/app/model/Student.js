Ext.define('Alice.model.Student', {
	extend: 'Ext.data.Model',
	fields: [
		'firstName',
		'lastName',
		'login'
	],
	belongsTo: 'Class'
});
