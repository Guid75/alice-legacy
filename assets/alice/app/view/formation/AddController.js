Ext.define('Alice.view.formation.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formationadd',
	requires: [
		'Alice.model.Formation'
	],

	onCancel: function () {
		this.closeView();
	},
	onCreateFormation: function () {
		var store = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Formation'
		});
		store.add({ label: this.lookupReference('labelField').getValue() });
		store.sync({
			success: function () {
				this.getView().fireEvent('formationCreated');
				this.closeView();
			}.bind(this)
		});
	}
});
