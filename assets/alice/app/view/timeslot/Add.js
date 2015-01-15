Ext.define('Alice.view.timeslot.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.timeslot-add',

	requires: [
		'Ext.form.field.Checkbox',
		'Ext.form.field.Time',
		'Alice.view.timeslot.AddController',
		'Alice.view.timeslot.AddModel'
	],

    controller: 'timeslot-add',
    viewModel: {
        type: 'timeslot-add'
    },

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
				defaultType: 'textfield',
				items: [
					{
						xtype: 'datefield',
						allowBlank: false,
						fieldLabel: 'Day',
						name: 'day',
						reference: 'dayField',
						itemId: 'day'
					},
					{
						xtype: 'timefield',
						allowBlank: false,
						fieldLabel: 'From',
						name: 'startTime',
						reference: 'startTimeField'
					},
					{
						xtype: 'timefield',
						allowBlank: false,
						fieldLabel: 'To',
						name: 'endTime',
						reference: 'endTimeField'
					},
					{
						xtype: 'checkbox',
						hideEmptyLabel: false,
						boxLabel: 'Week recurrence'
					}
				],
				buttons: [
					{
						text: 'Create timeslot',
						handler: 'onCreateTimeslot'
					},
					{
						text: 'Cancel',
						handler: 'closeView'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
