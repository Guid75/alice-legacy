Ext.define('Alice.view.student.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.students',

	requires: [
	],

	control: {
		'breadcrumb': {
			'selectionchange': function (cmp, node) {
				if (node.get('classId')) {
					this.getView().getLayout().setActiveItem('detailformation');
					this.lookupReference('detailformation').setCurrentFormation(node.get('classId'));
				} else {
					this.getView().getLayout().setActiveItem('allformations');
				}
			}
		},
		'formations': {
			'selectFormationDetail': function (classId) {
				this.selectFormationDetail(classId);
			}
		}
	},
	selectFormationDetail: function (classId) {
		var
		breadcrumb = this.lookupReference('breadcrumb'),
		i,
		node,
		root = breadcrumb.getStore().getRoot();

		for (i = 0; i < root.childNodes.length; i++) {
			node = root.childNodes[i];
			if (+node.get('classId') === +classId) {
				breadcrumb.setSelection(node);
				break;
			}
		}
	}
});
