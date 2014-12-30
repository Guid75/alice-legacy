Ext.define('Alice.view.student.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studenttree',

	requires: [
		'Alice.store.Classes'
	],

	addStudent: function (button) {
		this.fireEvent('studentAddStudent');
	}
});
