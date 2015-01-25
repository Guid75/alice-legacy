Ext.define('Alice.view.formation.FormationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formation',
	requires: [
		'Alice.view.student.Add',
		'Alice.model.Student'
	],
	control: {
		'formationview': function (grid, selected) {
			this.lookupReference('removeButton').setDisabled(selected.length === 0);
		}
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
	},
	studentFilterChanged: function (field, newValue) {
		// TODO: filter values
		this.getView().getStore().load({
			params: {
				where: Ext.String.format('{"class":"{0}","or":[{"firstName":{"contains":"{1}"}},{"lastName":{"contains":"{1}"}}]}', this.getView().classId, newValue)
			}
		});
	}
});
