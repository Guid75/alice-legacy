/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('Alice.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
		'Ext.XTemplate',
        'Alice.view.main.MainController',
        'Alice.view.main.MainModel',
		'Alice.view.student.Main',
		'Alice.view.student.Tree',
		'Alice.view.teacher.Teachers',
		'Alice.view.teacher.Tree',
		'Alice.store.Periods',
		'Alice.view.period.Main',
		'Alice.view.timeslot.Main',
		'Alice.view.workshop.Main'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

	layout: 'fit',
	initComponent: function () {
		var
		formatFunc = function (date) {
			return Ext.Date.format(date, 'j M y');
		},
		periodDisplayTemplate = Ext.create('Ext.XTemplate',
										   '<tpl for=".">',
										   '{[this.f(values.startDate)]} to {[this.f(values.endDate)]}',
										   '</tpl>', {
											   f: formatFunc
										   }
										  ),
		periodTemplate = Ext.create('Ext.XTemplate',
									'<tpl for=".">',
									'<div class="x-boundlist-item">{[this.f(values.startDate)]} to {[this.f(values.endDate)]}</div>',
									'</tpl>', {
										f: formatFunc
									}
								   );
		this.items = {
			xtype: 'panel',
			bind: {
				title: '{name}'
			},
			tools: [
				{
					xtype: 'combo',
					reference: 'periodCombo',
					emptyText: '<no period selected>',
					queryMode: 'local',
					store: new Ext.data.ChainedStore({
						source: 'Periods'
					}),
					editable: false,
					forceSelection: true,
					valueField: 'id',
					queryParam: false,
					width: 190,
					tpl: periodTemplate,
					displayTpl: periodDisplayTemplate,
					listeners: {
						select: function (combo) {
							Alice.globals.currentPeriodId = combo.getValue();
							console.log(combo.getValue());
						}
					}
				}
			],
			layout: 'border',
			items: [
				{
					xtype: 'container',
					region: 'west',
					split: true,
					width: 200,
					layout: {
						type: 'accordion',
						animate: true
					},
					items: [
						{
							title: 'Students',
							xtype: 'studenttree'
						},
						{
							title: 'Teachers',
							xtype: 'teachertree'
						}
					]
				},
				{
					region: 'center',
					xtype: 'tabpanel',
					items: [
						{
							xtype: 'tabpanel',
							title: 'Workshops',
							items: [
								{
									xtype: 'timeslot-main',
									title: 'Time slots'
								},
								{
									xtype: 'workshop-main',
									title: 'Workshops'
								},
								{
									xtype: 'period-main',
									title: 'Periods'
								}
							]
						},
						{
							title: 'Students',
							xtype: 'students'
						},
						{
							title: 'Teachers',
							xtype: 'teachers'
						}
					]
				}
			]
		};
		this.callParent();
	}
});
