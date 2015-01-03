Ext.define('Alice.view.formation.FormationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formations',
	requires: [
		'Alice.view.student.Add'
	],
	init: function () {
		this.control({
			'formationsview': {
				studentremoved: function (view, studentId) {
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
				Alice.getApplication().getStore('Formations').load();
			}.bind(this)
		});
	}
});