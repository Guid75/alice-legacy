Ext.define('Alice.view.period.Main', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.period-main',
	requires: [
		'Alice.view.period.MainController',
		'Alice.view.period.MainModel'
	],
    controller: 'period-main',
    viewModel: {
        type: 'period-main'
    },
	tbar: [
		{
			xtype: 'button',
			text: 'Add',
			handler: 'addPeriod'
		},
		{
			xtype: 'button',
			text: 'Remove',
			reference: 'removeButton',
			handler: 'removeCurrentPeriod',
			disabled: true
		}
	],
	store: 'Periods',
    columns: [
        { text: 'Start date',  dataIndex: 'startDate', width: 200 },
        { text: 'End date', dataIndex: 'endDate', flex: 1 }
    ]
});
