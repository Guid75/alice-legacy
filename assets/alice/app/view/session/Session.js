Ext.define('Alice.view.session.Session', {
    extend: 'Ext.panel.Panel',

	alias: 'widget.session-session',

	requires: [
		'Alice.view.session.SessionController',
		'Alice.view.session.SessionModel'
	],

    controller: 'session-session',
    viewModel: {
        type: 'session-session'
    },

	layout: 'fit',

	tbar: [
		{
			xtype: 'button',
			text: 'Add a student to the session',
			handler: 'addStudent'
		},
		{
			xtype: 'button',
			text: 'Remove the current student from the session',
			reference: 'removeButton',
			handler: 'removeCurrentStudent',
			disabled: true
		}
	],

	initComponent: function () {
		var me = this;
		this.items = [
			{
				xtype: 'grid',
				reference: 'grid',
				itemId: 'students-grid',
				viewConfig: {
					plugins: {
						ptype: 'gridviewdragdrop',
						ddGroup: 'students',
						enableDrag: false,
						dragText: 'Drag and drop to reorganize'
					},
					copy: true,
					listeners: {
						beforedrop: function (node, data, overModel, dropPosition, dropHandlers, eOpts) {
							var studentId = data.records[0].data.studentId;
							Ext.Ajax.request({
								url: '/session/' + me.currentSession + '/students/ ' + studentId,
								method: 'POST',
								success: function () {
									me.getComponent('students-grid').getStore().load({
										method: 'GET',
										url: '/session/' + me.currentSession + '/students'
									});
								}
							});
							dropHandlers.cancelDrop();
						}
					}
				},
				bind: '{students}',
				columns: [
					{
						text: 'First name',
						dataIndex: 'firstName'
					},
					{
						text: 'Last name',
						dataIndex: 'lastName',
						flex: 1
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
