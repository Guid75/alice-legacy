Ext.define('Alice.view.period.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.period-main',
	init: function () {
		this.control({
			'period-main': {
				'selectionchange': this.gridSelectionChanged
			}
		});
	},
	gridSelectionChanged: function (grid, selected) {
		this.lookupReference('removeButton').setDisabled(selected.length === 0);
	},
	addPeriod: function () {
		this.fireEvent('addPeriod');
	},
	removeCurrentPeriod: function () {
		var
		selection = this.getView().getSelection(),
		selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		this.getView().getStore().remove(selection);

		this.getView().getStore().sync();
	}
});
