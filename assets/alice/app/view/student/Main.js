Ext.define('Alice.view.student.Main', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.students',
    requires: [
		'Ext.toolbar.Breadcrumb',
		'Alice.view.class.Classes'
    ],

	_refreshBreadStore: function () {
		var root = {
			text: 'Classes',
			expanded: true,
			children: []
		};

		if (!this._breadStore) {
			this._breadStore = Ext.create('Ext.data.TreeStore', {});
		}

		Alice.getApplication().getStore('Classes').each(function (record) {
			root.children.push({
				text: record.get('label'),
				leaf: true
			});
		});
		this._breadStore.setRoot(root);
	},

	layout: 'fit',

	initComponent: function () {
		Alice.getApplication().getStore('Classes').on('load', function () {
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
					xtype: 'classes'
				}
			]
		});

		this.callParent(arguments);
	}
});
