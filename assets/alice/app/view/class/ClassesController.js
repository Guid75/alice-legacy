Ext.define('Alice.view.class.ClassesController', {
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
		this.fireEvent('studentAddStudent', button.record.getId());
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
			}.bind(this)
		});
	}
});
