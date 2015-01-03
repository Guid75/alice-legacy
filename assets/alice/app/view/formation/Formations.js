Ext.define('Alice.view.formation.Formations', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.formations',
	xtype: 'formationsview',
	requires: [
		'Alice.model.Formation',
		'Alice.view.formation.FormationsController',
		'Alice.store.Formations',
		'Alice.view.student.Tree'
	],
	controller: 'formations',
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

	_refreshFormations: function () {
		var
		me = this,
		items = [];
		Alice.getApplication().getStore('Formations').each(function (record) {
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
//		this._refreshFormations();

		this.callParent();
	},

	initComponent: function () {
		Alice.getApplication().getStore('Formations').on('load', function () {
			this._refreshFormations();
		}.bind(this));

		this.on('afterrender', function () {
			this.mon(this.el, 'click', this.onStudentClick, this, { delegate: 'div.alice-class-student' });
		});

		this.callParent(arguments);
	}
});
