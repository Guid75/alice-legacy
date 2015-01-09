Ext.define('Alice.controller.Student', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.student.Add',
		'Ext.window.Toast'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    studentAddStudent: this.addStudent
                }
            }
        });
    },

	addStudent: function (classId) {
		Ext.create('Alice.view.student.Add', {
			modal: true,
			classId: classId,
			listeners: {
				studentCreated: function (studentLabel) {
					Ext.toast('Student "' + studentLabel + '" created', 'Success', 't');
					Alice.getApplication().getStore('Formations').load();
				}
			}
		}).show();
	}
});
