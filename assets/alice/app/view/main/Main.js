/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Alice.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Alice.view.main.MainController',
        'Alice.view.main.MainModel',
		'Alice.view.student.Main',
		'Alice.view.student.Tree',
		'Alice.view.teacher.Teachers',
		'Alice.view.teacher.Tree'
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
			tbar: [
				{
					xtype: 'splitbutton',
					text: 'Student',
					handler: 'addStudent',
					menu: [
						{
							text: 'Create a student',
							handler: 'addStudent'
						},
						{
							text: 'Import...'
						}
					]
				},
				{
					xtype: 'button',
					text: 'Create formation',
					handler: 'addFormation'
				},
				{
					xtype: 'button',
					text: 'Create a teacher',
					handler: 'addTeacher'
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
							title: 'Workshops',
							html: 'here are defined workshops'
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
