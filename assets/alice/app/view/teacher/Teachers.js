Ext.define('Alice.view.teacher.Teachers', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.teachers',
	requires: [
		'Alice.model.Teacher',
		'Alice.view.teacher.TeachersController',
		'Alice.store.Teachers'
	],
	controller: 'teachers',
	xtype: 'teachersview',

	tbar: [
		{
			xtype: 'textfield',
			emptyText: 'Search',
			listeners: {
				change: 'teacherFilterChanged'
			}
		},
		{
			xtype: 'splitbutton',
			text: 'Add',
			handler: 'addTeacher',
			menu: [
				{
					text: 'Create a teacher',
					handler: 'addTeacher'
				},
				{
					text: 'Import...'
				}
			]
		},
		{
			xtype: 'button',
			text: 'Remove',
			reference: 'removeButton',
			handler: 'removeCurrentTeacher',
			disabled: true
		}
	],

    columns: [
        { text: 'First name',  dataIndex: 'firstName' },
        { text: 'Last name', dataIndex: 'lastName', flex: 1 }
    ],

	store: 'Teachers'
});
