Ext.define('Alice.view.teacher.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teachertree',

	requires: [
		'Alice.store.Classes',
		'Alice.String'
	],

	addTeacher: function (button) {
		this.fireEvent('teacherAddTeacher');
	},

	teacherFilterChanged: function (field, newValue) {
		this.getView().getStore().clearFilter();
		this.getView().getStore().filterBy(function (record) {
			if (!newValue || !record.get('leaf')) {
				return true;
			}
			return Alice.String.isSubString(record.get('text'), newValue);
		});
	}
});
