Ext.define('Alice.view.workshop.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workshop-main',
	control: {
		'treepanel#workshops-tree': {
			'selectionchange': function (grid, selected) {
				this.treeSelectionChanged(grid, selected);
			}
		}
	},
	init: function () {
		Alice.getApplication().getStore('Workshops').on('load', function () {
			this.refreshTreeStore();
		}.bind(this));
	},
	treeSelectionChanged: function (grid, selected) {
		var node;
		this.lookupReference('removeButton').setDisabled(selected.length === 0);
		if (selected.length === 0) {
			return;
		}
		node = selected[0];
		if (node.data.leaf) {
			this.fireEvent('selectSession', node.data.dataId);
			this.lookupReference('card').setActiveItem('sessionZone');
		} else {
			this.fireEvent('selectWorkshop', node.data.dataId);
			this.lookupReference('card').setActiveItem('workshopZone');
		}
	},
    addWorkshop: function () {
		this.fireEvent('addWorkshop');
	},
	refreshTreeStore: function () {
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
		this.lookupReference('workshopsTree').getStore().setRoot(root);
	},
	removeCurrentItem: function () {
		var
		tree = this.lookupReference('workshopsTree'),
		selection = tree.getSelection(),
		selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		if (selected.data.leaf) {
			Ext.Ajax.request({
				url: '/session/' + selected.data.dataId,
				method: 'DELETE',
				success: function () {
					Alice.getApplication().getStore('Workshops').load();
				}
			});
		} else {
			Ext.Ajax.request({
				url: '/workshop/' + selected.data.dataId,
				method: 'DELETE',
				success: function () {
					Alice.getApplication().getStore('Workshops').load();
				}
			});
		}
	},
	addSession: function () {
		var
		tree = this.lookupReference('workshopsTree'),
		selection = tree.getSelection(),
		selected,
		workshopId;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];
		workshopId = (selected.data.leaf ? selected.parentNode.data.dataId : selected.data.dataId);
		Ext.Ajax.request({
			url: '/session',
			method: 'POST',
			params: {
				workshop: workshopId
			},
			success: function () {
				Alice.getApplication().getStore('Workshops').load();
			}
		});
	}
});
