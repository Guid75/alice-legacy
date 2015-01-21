Ext.define('Alice.controller.Workshop', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.workshop.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    addWorkshop: this.addWorkshop
                }
            }
        });
    },

	addWorkshop: function () {
		Ext.create('Alice.view.workshop.Add', {
			modal: true,
			listeners: {
				workshopCreated: function () {
					// Alice.getApplication().getStore('Workshops').load();
				}
			}
		}).show();
	}
});
