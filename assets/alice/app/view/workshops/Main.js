Ext.define('Alice.view.workshops.Main', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.workshops',
	requires: [
		'Ext.tab.Panel',
		'Alice.view.workshops.MainController',
		'Alice.view.session.Main',
		'Alice.view.timeslot.Main',
		'Alice.view.period.Main'
	],
	controller: 'workshops',

	items: [
		{
			xtype: 'timeslot-main',
			title: 'Time slots'
		},
		{
			xtype: 'period-main',
			title: 'Periods'
		}
	]
});
