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
	treeSelectionChanged: function (grid, selected) {
		var node;
		this.lookupReference('removeWorkshopButton').setDisabled(selected.length === 0);
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
	removeCurrentWorkshop: function () {
		var
		grid = this.lookupReference('workshopsGrid'),
		selection = grid.getSelection(),
		selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		grid.getStore().remove(selection);

		grid.getStore().sync();
	}
});
