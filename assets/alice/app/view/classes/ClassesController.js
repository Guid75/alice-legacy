Ext.define('Alice.view.ClassesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.classes',
	requires: [
		'Alice.view.AddStudent'
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
	onPanelRendered: function () {
		console.log('panel was rendered');
	},
	addStudent: function (button) {
		var
		me = this,
		record = button.record;

		Ext.create('Alice.view.AddStudent', {
			modal: true,
			classId: record.getId(),
			listeners: {
				studentCreated: function () {
					console.log('studentCreated');
					me.getView()._refreshClasses();
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
				this.getView()._refreshClasses();
			}.bind(this)
		});
	}
});
