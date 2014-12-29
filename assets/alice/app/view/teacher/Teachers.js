Ext.define('Alice.view.teacher.Teachers', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.teachers',
	requires: [
		'Alice.model.Teacher',
		'Alice.view.teacher.TeachersController',
		'Alice.store.Teachers'
	],
	controller: 'teachers',

    columns: [
        { text: 'First name',  dataIndex: 'firstName' },
        { text: 'Last name', dataIndex: 'lastName', flex: 1 }
    ],

	store: 'Teachers',

	initComponent: function () {
		this.callParent(arguments);
	}
});
