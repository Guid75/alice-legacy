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
		'Alice.store.Navigation',
		'Alice.view.student.Tree',
		'Alice.view.teacher.Teachers',
		'Alice.view.class.Classes'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

	layout: 'fit',

	initComponent: function () {
		var store = new Alice.store.Navigation();
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
					text: 'Create class',
					handler: 'addClass'
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
					//						title: 'Center panel',
					items: [
						{
							title: 'Workshops',
							html: 'here are defined workshops'
						},
						{
							title: 'Students',
							tbar: [
								{
									xtype: 'breadcrumb',
									store: store,
									showIcons: true// ,
									// // Start with "Ext JS > dd > DragZone.js" selected
									// selection: store.getRoot().childNodes[4].childNodes[7]
								}
							],
							xtype: 'ClassesView'
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
