Ext.define('Alice.view.period.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.period-add',
	requires: [
		'Alice.view.period.AddController',
		'Alice.view.period.AddModel',
		'Alice.model.Period',
		'Ext.form.field.Date'
	],

    controller: 'period-add',
    viewModel: {
        type: 'period-add'
    },

	title: 'Add a new period',

	layout: 'fit',

	defaultFocus: 'startDate',

	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				fieldDefaults: {
					labelAlign: 'right',
					labelWidth: 115// ,
					// msgTarget: 'side'
				},
				bodyPadding: 10,
				defaults: {
					anchor: '100%'
				},
				buttons: [
					{
						text: 'Create period',
						handler: 'onCreatePeriod'
					},
					{
						text: 'Cancel',
						handler: 'closeView'
					}
				],
				items: [
					{
						xtype: 'datefield',
						allowBlank: false,
						fieldLabel: 'From',
						name: 'startDate',
						reference: 'startDateField',
						itemId: 'startDate'
					},
					{
						xtype: 'datefield',
						allowBlank: false,
						fieldLabel: 'To',
						reference: 'endDateField',
						name: 'endDate',
						itemId: 'endDate'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
