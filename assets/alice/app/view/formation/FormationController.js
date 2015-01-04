Ext.define('Alice.view.formation.FormationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formation',
	requires: [
		'Alice.view.student.Add'
	],
	init: function () {
		// this.control({
		// 	'formationsview': {
		// 		studentremoved: function (view, studentId) {
		// 			this.removeStudent(studentId);
		// 		}.bind(this)
		// 	}
		// });
	},
	addStudent: function () {
		this.fireEvent('studentAddStudent', this.getView().classId);
	},
	removeStudent: function (studentId) {
// 		var
// 		student = Ext.create('Alice.model.Student', {
// 			id: studentId
// 		});
// //		student.set('class', null);
// 		student.drop();
// 		student.save({
// 			callback: function () {
// 				Alice.getApplication().getStore('Formations').load();
// 			}.bind(this)
// 		});
	}
});
