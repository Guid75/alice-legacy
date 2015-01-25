Ext.define('Alice.view.session.Session', {
    extend: 'Ext.panel.Panel',

	alias: 'widget.session-session',

	requires: [
		'Ext.layout.container.VBox',
		'Alice.view.session.SessionController',
		'Alice.view.session.SessionModel'
	],

    controller: 'session-session',
    viewModel: {
        type: 'session-session'
    },

	layout: 'border',

	initComponent: function () {
		var me = this;

		this.items = [
			{
				xtype: 'grid',
				reference: 'timeslotsGrid',
				itemId: 'timeslots-grid',
				region: 'north',
				bind: '{timeslots}',
				hideHeaders: true,
				columns: [
					{
						xtype: 'templatecolumn',
						text: 'Timeslot',
						tpl: Ext.create('Ext.XTemplate',
										'{[Ext.Date.format(values.date, "F j, Y")]}, from {[this.toTime(values.startTime)]} to {[this.toTime(values.endTime)]}', {
											toTime: function (s) {
												var hours = Math.floor(s / 3600);
												s %= 3600;
												var minutes = Math.floor(s / 60);
												var seconds = s % 60;
												return hours + ':' + minutes;
											}
										}),
						flex: 1
					}
				],
				tbar: [
					{
						xtype: 'button',
						text: 'Add a timeslot to the session',
						handler: 'addTimeslot'
					},
					{
						xtype: 'button',
						text: 'Remove the current timeslot from the session',
						reference: 'removeTimeslotButton',
						handler: 'removeCurrentTimeslot',
						disabled: true
					}
				]
			},
			{
				xtype: 'grid',
				region: 'center',
				reference: 'studentsGrid',
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
				hideHeaders: true,
				columns: [
					{
						xtype: 'templatecolumn',
						text: 'Student',
						flex: 1,
						tpl: Ext.create('Ext.XTemplate',
										'{[values.lastName.toUpperCase()]}, {firstName}')
					}
				],
				tbar: [
					{
						xtype: 'button',
						text: 'Add a student to the session',
						handler: 'addStudent'
					},
					{
						xtype: 'button',
						text: 'Remove the current student from the session',
						reference: 'removeStudentButton',
						handler: 'removeCurrentStudent',
						disabled: true
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
