Ext.define('Alice.view.period.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.period-add',
	requires: [
		'Alice.model.Period'
	],
	onCancel: function () {
		this.closeView();
	},
	onCreatePeriod: function () {
		var store = Alice.getApplication().getStore('Periods');
		store.add({
			startDate: this.lookupReference('startDateField').getValue(),
			endDate: this.lookupReference('endDateField').getValue()
		});
		store.sync({
			success: function () {
//				this.getView().fireEvent('periodCreated');
				this.closeView();
			}.bind(this)
		});
	}
});
