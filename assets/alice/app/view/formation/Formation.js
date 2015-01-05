Ext.define('Alice.view.formation.Formation', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.formation',
	xtype: 'formationview',
	requires: [
		'Alice.model.Formation',
		'Alice.view.formation.FormationController',
		'Alice.view.formation.FormationModel'
	],
	controller: 'formation',
    viewModel: {
        type: 'formation'
    },

	columns: [
        { text: 'First name',  dataIndex: 'firstName' },
        { text: 'Last name', dataIndex: 'lastName', flex: 1 }
    ],

	tbar: [
		{
			xtype: 'textfield',
			emptyText: 'Search',
			listeners: {
				change: 'studentFilterChanged'
			}
		},
		{
			xtype: 'splitbutton',
			text: 'Add',
			handler: 'addStudent',
			menu: [
				{
					text: 'Create a student',
					handler: 'addStudent'
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
			handler: 'removeCurrentStudent',
			disabled: true
		}
	],

	initComponent: function () {
		Alice.getApplication().getStore('Formations').on('load', function () {
			if (this.classId !== undefined) {
 				this.setCurrentFormation(this.classId);
			}
		}.bind(this));

		this.callParent(arguments);
	},

	setCurrentFormation: function (classId) {
		this.classId = classId;
		Alice.model.Formation.load(classId, {
			success: function (formation) {
				this.setStore(formation.students());
			}.bind(this)
		});
	}
});
