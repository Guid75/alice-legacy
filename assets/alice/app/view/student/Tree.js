Ext.define('Alice.view.student.Tree', {
    extend: 'Ext.tree.Panel',

	alias: 'widget.studenttree',

	requires: [
		'Ext.tree.Panel',
		'Alice.view.student.TreeModel',
		'Alice.view.student.TreeController',
		'Alice.store.Formations'
	],

    controller: 'studenttree',
    viewModel: {
        type: 'studenttree'
    },

	rootVisible: false,

	tbar: [
		{
			xtype: 'textfield',
			flex: 1,
			listeners: {
				change: 'studentFilterChanged'
			}
		},
		{
			xtype: 'button',
			text: 'Add',
			handler: 'addStudent'
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
		Alice.getApplication().getStore('Formations').each(function (record) {
			var children = [];
			record.students().each(function (student) {
				children.push({
					text: student.get('lastName').toUpperCase() + ', ' + student.get('firstName'),
					leaf: true
				});
			});

			root.children.push({
				text: record.get('label'),
				children: children,
				expanded: true
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

		Alice.getApplication().getStore('Formations').on('load', function () {
			this._refreshTree();
		}.bind(this));

		// maybe the store is loaded?
		this._refreshTree();

		this.callParent();
	}
});
