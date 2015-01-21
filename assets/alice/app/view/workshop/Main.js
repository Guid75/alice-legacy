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

	_refreshTree: function () {
		var root = {
			expanded: true,
			children: []
		};
		Alice.getApplication().getStore('Workshops').each(function (record) {
			var children = [];
			var index = 1;
			record.sessions().each(function (session) {
				children.push({
					text: 'Session ' + index++,
					dataId: session.get('id'),
					leaf: true
				});
			});

			root.children.push({
				text: record.get('label'),
				dataId: record.get('id'),
				children: children,
				expanded: true
			});
		});
		this.getComponent('workshopsTree').getStore().setRoot(root);
	},

	initComponent: function () {
		var treeStore = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: []
			}
		});

		Alice.getApplication().getStore('Workshops').on('load', function () {
			this._refreshTree();
		}.bind(this));

		// maybe the store is loaded?
//		this._refreshTree();

		Ext.apply(this, {
			items: [
				{
					xtype: 'treepanel',
					reference: 'workshopsTree',
					itemId: 'workshopsTree',
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
									text: 'A new workshop session'
								}
							]
						},
						{
							xtype: 'button',
							text: 'Remove',
							reference: 'removeWorkshopButton',
							handler: 'removeCurrentWorkshop',
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
