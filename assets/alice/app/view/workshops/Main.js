Ext.define('Alice.view.workshops.Main', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.workshops',
	requires: [
		'Ext.tab.Panel',
		'Alice.view.workshops.MainController',
		'Alice.view.period.Main'
	],
	controller: 'workshops',

	items: [
		{
			title: 'Sessions',
			html: 'Here are defined sessions'
		},
		{
			xtype: 'period-main',
			title: 'Periods'
		}
	]
});
