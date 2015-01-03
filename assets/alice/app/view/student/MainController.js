Ext.define('Alice.view.student.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.students',

	requires: [
	],

	init: function () {
		this.control({
			'breadcrumb': {
				selectionchange: function (cmp, node) {
					if (node.get('classId')) {
						this.getView().getLayout().setActiveItem('detailformation');
						Ext.ComponentQuery.query('#detailformation')[0].setCurrentFormation(node.get('classId'));
					} else {
						this.getView().getLayout().setActiveItem('allformations');
					}
				}.bind(this)
			}
		});
	}
});
