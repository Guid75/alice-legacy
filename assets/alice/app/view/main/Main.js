/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('Alice.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Alice.view.main.MainController',
        'Alice.view.main.MainModel',
		'Alice.view.student.Main',
		'Alice.view.student.Tree',
		'Alice.view.teacher.Teachers',
		'Alice.view.teacher.Tree',
		'Alice.view.workshops.Main'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

	layout: 'fit',

	initComponent: function () {
		this.items = {
			xtype: 'panel',
			bind: {
				title: '{name}'
			},
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
							title: 'Workshops',
							xtype: 'workshops'
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
