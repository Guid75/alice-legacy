Ext.define('Alice.view.formation.FormationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formation',
	requires: [
		'Alice.view.student.Add',
		'Alice.model.Student'
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
	removeCurrentStudent: function () {
		var
		selection = this.getView().getSelection(),
		student,
		selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		student = Ext.create('Alice.model.Student', {
 			id: selected.id
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
