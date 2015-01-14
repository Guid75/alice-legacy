Ext.define('Alice.view.timeslot.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.timeslot-main',
	init: function () {
		this.control({
			'grid': {
				'selectionchange': this.gridSelectionChanged
			}
		});
	},
	gridSelectionChanged: function (grid, selected) {
		this.lookupReference('removeTimeslotButton').setDisabled(selected.length === 0);
	},
    addTimeslot: function () {
		this.fireEvent('addTimeslot');
	},
	removeCurrentTimeslot: function () {
		var
		grid = this.lookupReference('timeslotsGrid'),
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
