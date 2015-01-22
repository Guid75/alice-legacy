Ext.define('Alice.view.teacher.Tree', {
    extend: 'Ext.tree.Panel',

	alias: 'widget.teachertree',

    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop'
        }
    },

	requires: [
		'Ext.tree.Panel',
		'Alice.view.teacher.TreeModel',
		'Alice.view.teacher.TreeController'
	],

    controller: 'teachertree',
    viewModel: {
        type: 'teachertree'
    },

	rootVisible: false,

	tbar: [
		{
			xtype: 'textfield',
			flex: 1,
			listeners: {
				change: 'teacherFilterChanged'
			}
		},
		{
			xtype: 'button',
			text: 'Add',
			handler: 'addTeacher'
		}
	],

	getStore: function () {
		return this.store;
	},

	_refreshTree: function () {
		var root = {
			expanded: true,
			children: []
		};
		Alice.getApplication().getStore('Teachers').each(function (record) {
			root.children.push({
				text: record.get('lastName').toUpperCase() + ', ' + record.get('firstName'),
				leaf: true
			});
		});
		this.store.setRoot(root);
	},

    initComponent: function() {
		var treeStore = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: []
			}
		});

		this.store = treeStore;

		Alice.getApplication().getStore('Teachers').on('load', function () {
			this._refreshTree();
		}.bind(this));

		// maybe the store is loaded?
		this._refreshTree();

		this.callParent();
	}
});
