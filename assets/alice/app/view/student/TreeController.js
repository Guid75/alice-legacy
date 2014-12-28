Ext.define('Alice.view.student.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studenttree',

	addStudent: function (button) {
		Ext.create('Alice.view.student.Add', {
			modal: true,
			listeners: {
				studentCreated: function () {
					Alice.getApplication().getStore('Classes').load();
				}
			}
		}).show();
	}
});
