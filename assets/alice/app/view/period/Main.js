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
	hideHeaders: true,
    columns: [
				{
					xtype: 'templatecolumn',
					tpl: Ext.create('Ext.XTemplate',
									'From {[Ext.Date.format(values.startDate, "F j, Y")]} to {[Ext.Date.format(values.endDate, "F j, Y")]}'
								   ),
					flex: 1
				}
    ]
});
