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
		var date = this.lookupReference('dayField').getValue();
		var startSec = toSec(this.lookupReference('startTimeField').getValue());
		var endSec = toSec(this.lookupReference('endTimeField').getValue());
		date.setSeconds(startSec);
		var r = store.add({
			date: date,
			duration: endSec - startSec
		});

		store.sync({
			success: function () {
				this.closeView();
			}.bind(this)
		});
	}
});
