Ext.define('Alice.view.workshop.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.workshop-main',
	requires: [
		'Alice.view.workshop.MainController'
	],
	controller: 'workshop-main',
	html: 'hi everybody!'
});
