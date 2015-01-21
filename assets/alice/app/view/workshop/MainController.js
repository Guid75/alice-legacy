Ext.define('Alice.view.workshop.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workshop-main',
	init: function () {
		this.control({
			'treepanel': {
				'selectionchange': this.treeSelectionChanged
			}
		});
	},
	treeSelectionChanged: function (grid, selected) {
		var node;
		this.lookupReference('removeWorkshopButton').setDisabled(selected.length === 0);
		if (selected.length > 0) {
			node = selected[0];
			if (node.data.leaf) {
				this.fireEvent('selectSession', node.data.dataId);
				this.lookupReference('card').setActiveItem('sessionZone');
			} else {
				this.fireEvent('selectWorkshop', node.data.dataId);
				this.lookupReference('card').setActiveItem('workshopZone');
			}
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
