Ext.define('Alice.view.class.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.classadd',
	requires: [
		'Alice.model.Class'
	],

	onCancel: function () {
		this.closeView();
	},
	onCreateClass: function () {
		var store = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Class'
		});
		store.add({ label: this.lookupReference('labelField').getValue() });
		store.sync({
			success: function () {
				this.getView().fireEvent('classCreated');
				this.closeView();
			}.bind(this)
		});
	}
});
