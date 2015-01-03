Ext.define('Alice.view.class.Classes', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.classes',
	xtype: 'classesview',
	requires: [
		'Alice.view.formation.Formation',
		'Alice.model.Class',
		'Alice.view.class.ClassesController',
		'Alice.store.Classes',
		'Alice.view.student.Tree'
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
		var
		me = this,
		items = [];
		Alice.getApplication().getStore('Classes').each(function (record) {
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
		this.removeAll();
		this.add(items);
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

	afterRender: function () {
		// maybe the store is loaded?
//		this._refreshClasses();

		this.callParent();
	},

	initComponent: function () {
		Alice.getApplication().getStore('Classes').on('load', function () {
			this._refreshClasses();
		}.bind(this));

		this.on('afterrender', function () {
			this.mon(this.el, 'click', this.onStudentClick, this, { delegate: 'div.alice-class-student' });
		});

		this.callParent(arguments);
	}
});
