
Ext.define('Alice.view.workshop.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.workshop-main',
	requires: [
		'Alice.view.workshop.MainController',
		'Alice.view.workshop.Workshop',
		'Alice.view.session.Session'
	],
	controller: 'workshop-main',
	layout: 'border',

	initComponent: function () {
		var treeStore = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: []
			}
		});

		Ext.apply(this, {
			items: [
				{
					xtype: 'treepanel',
					reference: 'workshopsTree',
					itemId: 'workshops-tree',
					store: treeStore,
					rootVisible: false,
					tbar: [
						{
							xtype: 'button',
							text: 'Add',
							menu: [
								{
									text: 'A new workshop',
									handler: 'addWorkshop'
								},
								{
									text: 'A new workshop session',
									handler: 'addSession'
								}
							]
						},
						{
							xtype: 'button',
							text: 'Remove',
							reference: 'removeButton',
							handler: 'removeCurrentItem',
							disabled: true
						}
					],
					region: 'west',
					width: 230,
					split: true
				},
				{
					xtype: 'container',
					region: 'center',
					layout: 'card',
					reference: 'card',
					items: [
						{
							xtype: 'workshop-workshop',
							reference: 'workshopZone',
							itemId: 'workshopZone'
						},
						{
							xtype: 'session-session',
							reference: 'sessionZone',
							itemId: 'sessionZone'
						}
					]
				}
			]
		});
		this.callParent(arguments);
	}
});
