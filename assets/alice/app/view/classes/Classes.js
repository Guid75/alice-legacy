Ext.define('Alice.view.classes.Classes', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.ClassesView',
	requires: [
		'Alice.view.formation.Formation',
		'Alice.model.Class'
	],

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	_refreshClasses: function () {
		var me = this;
		this._store.load({
			callback: function (records, operation, success) {
				var items = [];
				records.forEach(function (record) {
					var html = [];
					record.get('students').forEach(function (student) {
						html.push('<div>' + student.lastName.toUpperCase() + ', ' + student.firstName + '</div>');
					});
					items.push({
						xtype: 'panel',
						title: record.get('label'),
						html: html.length == 0 ? '&lt;no students&gt;' : html.join(''),
						width: 300
					});
				});
				me.removeAll();
				me.add(items);
			}
		});

	},

	initComponent: function () {
		this._store = Ext.create('Ext.data.Store', { model: 'Alice.model.Class' });

		this._refreshClasses();

		this.callParent(arguments);
	}
});
