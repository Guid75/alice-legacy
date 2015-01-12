Ext.define('Alice.view.timeslot.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.timeslot-add',

	requires: [
		'Ext.form.field.Time',
		'Alice.view.timeslot.AddController',
		'Alice.view.timeslot.AddModel'
	],

    controller: 'timeslot-add',
    viewModel: {
        type: 'timeslot-add'
    },

	initComponent: function () {
		var
		weekDayDisplayTemplate = Ext.create('Ext.XTemplate',
											'<tpl for=".">',
											'{[Ext.Date.dayNames[values.field1]]}',
											'</tpl>'
										   ),
		weekDayTemplate = Ext.create('Ext.XTemplate',
									 '<tpl for=".">',
									 '<div class="x-boundlist-item">{[Ext.Date.dayNames[xindex]]}</div>',
									 '</tpl>'
									);

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
				buttons: [
					{
						text: 'Create timeslot',
						handler: 'onCreateTimeslot'
					},
					{
						text: 'Cancel',
						handler: 'closeView'
					}
				],
				items: [
					{
						xtype: 'combo',
						store: [1, 2, 3, 4, 5, 6, 7],
						allowBlank: false,
						fieldLabel: 'Week day',
						name: 'weekDay',
						reference: 'weekDayField',
						itemId: 'weekDay',
						displayTpl: weekDayDisplayTemplate,
						tpl: weekDayTemplate
					},
					{
						xtype: 'timefield',
						allowBlank: false,
						fieldLabel: 'Start time',
						name: 'startTime',
						reference: 'startTimeField'
					},
					{
						xtype: 'timefield',
						allowBlank: false,
						fieldLabel: 'End time',
						name: 'endTime',
						reference: 'endTimeField'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
