Ext.define('Alice.view.period.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.period-main',
	control: {
		'#': {
			'selectionchange': function (grid, selected) {
				this.lookupReference('removeButton').setDisabled(selected.length === 0);
			}
		}
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
