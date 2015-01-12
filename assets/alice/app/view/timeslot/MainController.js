Ext.define('Alice.view.timeslot.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.timeslot-main',
    addTimeslot: function () {
		this.fireEvent('addTimeslot');
	}
});
