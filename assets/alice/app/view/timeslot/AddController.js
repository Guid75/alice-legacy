Ext.define('Alice.view.timeslot.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.timeslot-add',
	onCreateTimeslot: function () {
		function toSec(t) {
			var hms = Ext.Date.format(t, 'H:i:s');
			var a = hms.split(':');

			return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
		}
		var store = Alice.getApplication().getStore('Timeslots');
		var r = store.add({
			weekDay: this.lookupReference('weekDayField').getValue(),
			startTime: toSec(this.lookupReference('startTimeField').getValue()),
			endTime: toSec(this.lookupReference('endTimeField').getValue())
		});

		store.sync({
			success: function () {
				this.closeView();
			}.bind(this)
		});
	}
});
