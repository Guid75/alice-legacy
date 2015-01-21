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
		this.items = [
			{
				xtype: 'grid',
				reference: 'grid',
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
