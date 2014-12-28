Ext.define('Alice.view.classes.ClassesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.classes',
	requires: [
		'Alice.view.student.Add'
	],
	init: function () {
		this.control({
			'classesview': {
				studentremoved: function (classesview, studentId) {
					this.removeStudent(studentId);
				}.bind(this)
			}
		});
	},
	addStudent: function (button) {
		var
		record = button.record;

		Ext.create('Alice.view.student.Add', {
			modal: true,
			classId: record.getId(),
			listeners: {
				studentCreated: function () {
					Alice.getApplication().getStore('Classes').load();
				}
			}
		}).show();
	},
	removeStudent: function (studentId) {
		var
		student = Ext.create('Alice.model.Student', {
			id: studentId
		});
//		student.set('class', null);
		student.drop();
		student.save({
			callback: function () {
				Alice.getApplication().getStore('Classes').load();
//				this.getView()._refreshClasses();
			}.bind(this)
		});
	}
});
