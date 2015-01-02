Ext.define('Alice.controller.Teacher', {
    extend: 'Ext.app.Controller',

	requires: [
		'Alice.view.teacher.Add'
	],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    teacherAddTeacher: this.addTeacher
                }
            }
        });
    },

	addTeacher: function (classId) {
		Ext.create('Alice.view.teacher.Add', {
			modal: true,
			listeners: {
				teacherCreated: function () {
					Alice.getApplication().getStore('Teachers').load();
				}
			}
		}).show();
	}
});
