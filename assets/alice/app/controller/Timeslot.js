Ext.define('Alice.controller.Timeslot', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.timeslot.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    addTimeslot: this.addTimeslot
                }
            }
        });
    },

	addTimeslot: function () {
		Ext.create('Alice.view.timeslot.Add', {
			modal: true,
			listeners: {
				teacherCreated: function () {
					// Alice.getApplication().getStore('Teachers').load();
				}
			}
		}).show();
	}
});
