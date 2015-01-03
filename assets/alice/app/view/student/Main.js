Ext.define('Alice.view.student.Main', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.students',
    requires: [
		'Ext.toolbar.Breadcrumb',
		'Alice.view.formation.Formations',
		'Alice.view.formation.Formation',
		'Alice.view.student.MainController'
    ],

	controller: 'students',

	layout: 'card',

	_refreshBreadStore: function () {
		var root = {
			text: 'Formations',
			expanded: true,
			children: []
		};

		if (!this._breadStore) {
			this._breadStore = Ext.create('Ext.data.TreeStore', {});
		}

		Alice.getApplication().getStore('Formations').each(function (record) {
			root.children.push({
				text: record.get('label'),
				classId: record.get('id'),
				leaf: true
			});
		});
		this._breadStore.setRoot(root);
	},

	initComponent: function () {
		Alice.getApplication().getStore('Formations').on('load', function () {
			this._refreshBreadStore();
		}.bind(this));

		this._refreshBreadStore();

		Ext.apply(this, {
			tbar: [
				{
					xtype: 'breadcrumb',
					store: this._breadStore,
					showIcons: true
				}
			],
			items: [
				{
					xtype: 'formations',
					itemId: 'allformations'
				},
				{
					xtype: 'formation',
					itemId: 'detailformation'
				}
			]
		});

		this.callParent(arguments);
	}
});
