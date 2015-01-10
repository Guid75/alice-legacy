Ext.define('Alice.controller.Period', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.period.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    addPeriod: this.addPeriod
                }
            }
        });
    },

	addPeriod: function () {
		Ext.create('Alice.view.period.Add', {
			modal: true,
			listeners: {
				periodCreated: function () {
					Alice.getApplication().getStore('Periods').load();
				}
			}
		}).show();
	}
});
