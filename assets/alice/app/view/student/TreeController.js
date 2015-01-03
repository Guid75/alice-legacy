Ext.define('Alice.view.student.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studenttree',

	requires: [
		'Alice.String'
	],

	addStudent: function (button) {
		this.fireEvent('studentAddStudent');
	},

	studentFilterChanged: function (field, newValue) {
		this.getView().getStore().clearFilter();
		this.getView().getStore().filterBy(function (record) {
			if (!newValue || !record.get('leaf')) {
				return true;
			}
			return Alice.String.isSubString(record.get('text'), newValue);
		});
	}
});
