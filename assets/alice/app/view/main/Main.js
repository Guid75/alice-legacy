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
		'Alice.view.student.Tree'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

	layout: 'fit',

	initComponent: function () {
		var store = new Alice.store.Navigation();
		this.items = [
			{
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
								html: 'Text2'
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
				// items: [
				// 	{
				// 		xtype: 'tabpanel',
				// 		items: [
				// 			{
				// 				title: 'Workshops',
				// 				html: 'here are defined workshops'
				// 			},
				// 			{
				// 				title: 'Students',
				// 				layout:  {
				// 					type: 'hbox',
				// 					align: 'stretch'
				// 				},
				// 				items: [
				// 					{
				// 						xtype: 'panel',
				// 						// region: 'west',
				// 						html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
				// 						width: 250,
				// 						title: 'Students',
				// 						resizable: true,
				// 						resizeHandles: 'e',
				// 						collapsible: true,
				// 						collapseDirection: 'left',
				// 						tbar: [{
				// 							xtype: 'label',
				// 							text: 'Search'
				// 						}, {
				// 							xtype: 'textfield'
				// 						}, {
				// 							xtype: 'button',
				// 							text: 'Add'
				// 						}]
				// 					}, {
				// 						tbar: [
				// 							{
				// 								xtype: 'breadcrumb',
				// 								store: store,
				// 								showIcons: true// ,
				// 								// // Start with "Ext JS > dd > DragZone.js" selected
				// 								// selection: store.getRoot().childNodes[4].childNodes[7]
				// 							}
				// 						],
				// 						xtype: 'ClassesView',
				// 						flex: 1
				// 					}
				// 				]
				// 			},
				// 			{
				// 				title: 'Teachers',
				// 				html: 'here are defined teachers'
				// 			}
				// 		]
				// 	}
				// ]
			}
		];
		this.callParent();
	}
});
