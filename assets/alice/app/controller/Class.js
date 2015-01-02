Ext.define('Alice.controller.Class', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.class.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    classAddClass: this.addClass
                }
            }
        });
    },

	addClass: function () {
		Ext.create('Alice.view.class.Add', {
			modal: true,
			listeners: {
				classCreated: function () {
					Alice.getApplication().getStore('Classes').load();
				}
			}
		}).show();
	}
});
