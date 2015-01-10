Ext.define('Alice.view.workshops.Main', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.workshops',
	requires: [
		'Ext.tab.Panel',
		'Alice.view.workshops.MainController'
	],
	controller: 'workshops',

	items: [
		{
			title: 'Sessions',
			html: 'Here are defined sessions'
		},
		{
			title: 'Periods',
			html: 'Here are defined periods'
		}
	]
});
