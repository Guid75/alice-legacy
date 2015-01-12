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
			tbar: [
				{
					xtype: 'button',
					text: 'Add',
					handler: 'addTimeslot'
				},
				{
					xtype: 'button',
					text: 'Remove',
					reference: 'removeButton',
					handler: 'removeCurrentTimeslot',
					disabled: true
				}
			],
			region: 'west',
			hideHeaders: true,
			width: 200,
			split: true,
			columns: [
				{ xtype: 'templatecolumn', tpl: Ext.create('Ext.XTemplate',
														   // '{[Ext.Date.dayNames[values.weekDay]]}, from {[this.toTime(values.startTime)]} to {[this.toTime(values.endTime)]}', {
														   '{[Ext.Date.dayNames[values.weekDay]]}, from {[this.toTime(values.startTime)]} to {[this.toTime(values.endTime)]}', {
					toTime: function (s) {
						var hours = Math.floor(s / 3600);
						s %= 3600;
						var minutes = Math.floor(s / 60);
						var seconds = s % 60;
						return hours + ':' + minutes;
					}
				}), flex: 1 }
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
