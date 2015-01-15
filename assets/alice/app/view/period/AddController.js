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
		if (!this.lookupReference('form').isValid()) {
			return;
		}

		var store = Alice.getApplication().getStore('Periods');
		var r = store.add({
			startDate: this.lookupReference('startDateField').getValue(),
			endDate: this.lookupReference('endDateField').getValue()
		});

		store.sync({
			success: function () {
				this.closeView();
			}.bind(this)
		});
	},
	startDateChanged: function (startDateField) {
		this.lookupReference('endDateField').setMinValue(startDateField.getValue());
	},
	endDateChanged: function (endDateField) {
		this.lookupReference('startDateField').setMaxValue(endDateField.getValue());
	}
});
