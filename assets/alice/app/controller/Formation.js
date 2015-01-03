Ext.define('Alice.controller.Formation', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.formation.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    formationAddFormation: this.addFormation
                }
            }
        });
    },

	addFormation: function () {
		Ext.create('Alice.view.formation.Add', {
			modal: true,
			listeners: {
				formationCreated: function () {
					Alice.getApplication().getStore('Formations').load();
				}
			}
		}).show();
	}
});
