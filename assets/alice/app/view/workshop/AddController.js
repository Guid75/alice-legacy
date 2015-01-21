Ext.define('Alice.view.workshop.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workshop-add',
	onCancel: function () {
		this.closeView();
	},
	onCreateWorkshop: function () {
		if (!this.lookupReference('form').isValid()) {
			return;
		}

		var store = Alice.getApplication().getStore('Workshops');
		var r = store.add({
			label: this.lookupReference('labelField').getValue()
		});

		store.sync({
			success: function () {
				this.closeView();
			}.bind(this)
		});
	}
});
