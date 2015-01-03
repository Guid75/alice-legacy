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

	setCurrentFormation: function (classId) {
		var
		record = Alice.getApplication().getStore('Formations').getById(classId);
		this.setStore(record.students());
	}
});
