Ext.define('Alice.view.classes.Classes', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.ClassesView',
	xtype: 'classesview',
	requires: [
		'Alice.view.formation.Formation',
		'Alice.model.Class',
		'Alice.view.ClassesController'
	],
	controller: 'classes',
	layout: {
		type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },
	defaults: {
		width: 300,
		bodyPadding: 10,
		frame: true
	},

	_refreshClasses: function () {
		var me = this;
		this._store.load({
			callback: function (records, operation, success) {
				var items = [];
				records.forEach(function (record) {
					items.push({
						xtype: 'panel',
						cls: 'student-class',
						title: record.get('label'),
						tools: [
							{
								xtype: 'button',
								text: 'Add',
								handler: 'addStudent',
								record: record
							}
						],
						tpl: '<tpl for="students"><div class="alice-class-student" student-id="{id}">{[values.lastName.toUpperCase()]}, {firstName}</div></tpl>',
						data: record.getData({ associated: true })
					});
				});
				me.removeAll();
				me.add(items);
				me.on('afterrender', function () {
					me.mon(me.el, 'click', me.onStudentClick, me, { delegate: 'div.alice-class-student' });
				});
			}
		});

	},

	onStudentClick: function (ev, t) {
		var
		targetEl = Ext.fly(t),
		mouseX = ev.getX(),
		studentId;

		// is the remove icon has been clicked?
		if (mouseX > targetEl.getX() + targetEl.getWidth() - 16) {
			ev.stopEvent();

			studentId = Ext.fly(t).getAttribute('student-id');

			this.fireEvent('studentremoved', this, studentId, ev);
		}
	},

	getStore: function () {
		return this._store;
	},

	initComponent: function () {
		this._store = Ext.create('Ext.data.Store', { model: 'Alice.model.Class' });

		this._refreshClasses();

		this.callParent(arguments);
	}
});
