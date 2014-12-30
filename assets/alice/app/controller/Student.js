Ext.define('Alice.controller.Student', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.student.Add'
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
				studentCreated: function () {
					Alice.getApplication().getStore('Classes').load();
				}
			}
		}).show();
	}
});
