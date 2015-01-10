Ext.define('Alice.view.teacher.TeachersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teachers',
	init: function () {
		this.control({
			'teachersview': {
				'selectionchange': this.gridSelectionChanged
			}
		});
	},
	requires: [
		'Alice.model.Teacher'
	],
	gridSelectionChanged: function (grid, selected) {
		this.lookupReference('removeButton').setDisabled(selected.length === 0);
	},
	addTeacher: function () {
		this.fireEvent('teacherAddTeacher');
	},
	teacherFilterChanged: function (field, newValue) {
		this.getView().getStore().load({
			params: {
				where: Ext.String.format('{"or":[{"firstName":{"contains":"{0}"}},{"lastName":{"contains":"{0}"}}]}', newValue)
			}
		});
	},
	removeCurrentTeacher: function () {
		var
		selection = this.getView().getSelection(),
		selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		this.getView().getStore().remove(selection);

		this.getView().getStore().sync();

		// teacher = Ext.create('Alice.model.Teacher', {
 		// 	id: selected.id
 		// });
 		// teacher.drop();
 		// teacher.save({
 		// 	callback: function () {
 		// 	}.bind(this)
 		// });
	}
});
