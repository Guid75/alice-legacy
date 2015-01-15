Ext.define('Alice.view.timeslot.Main',{
    extend: 'Ext.panel.Panel',

	alias: 'widget.timeslot-main',
	requires: [
		'Alice.view.timeslot.MainController',
		'Alice.view.timeslot.MainModel',
		'Alice.store.Timeslots'
	],
    controller: 'timeslot-main',
    viewModel: {
        type: 'timeslot-main'
    },

	layout: 'border',

	items: [
		{
			xtype: 'grid',
			reference: 'timeslotsGrid',
			tbar: [
				{
					xtype: 'button',
					text: 'Add',
					handler: 'addTimeslot'
				},
				{
					xtype: 'button',
					text: 'Remove',
					reference: 'removeTimeslotButton',
					handler: 'removeCurrentTimeslot',
					disabled: true
				}
			],
			region: 'west',
			hideHeaders: true,
			width: 230,
			split: true,
			columns: [
				{
					xtype: 'templatecolumn',
					tpl: Ext.create('Ext.XTemplate',
									'{[Ext.Date.format(values.date, "F j, Y")]}, from {[this.toTime(values.startTime)]} to {[this.toTime(values.endTime)]}', {
										toTime: function (s) {
											var hours = Math.floor(s / 3600);
											s %= 3600;
											var minutes = Math.floor(s / 60);
											var seconds = s % 60;
											return hours + ':' + minutes;
										}
									}),
					flex: 1
				}
			],
			store: 'Timeslots'
		},
		{
			xtype: 'panel',
			region: 'center',
			html: 'slave zone'
		}
	]
});
