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
        'Alice.view.main.MainModel'// ,
		// 'Alice.view.classes.Classes'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

	layout: 'fit',

	items: [
		{
			xtype: 'panel',
			bind: {
				title: '{name}'
			},
			layout: 'fit',
			items: [
				{
					xtype: 'tabpanel',
					items: [
						{
							title: 'Workshops',
							html: 'here are defined workshops'
						},
						{
							title: 'Students',
							layout:  {
								type: 'hbox',
								align: 'stretch'
							},
							items: [
								{
									xtype: 'panel',
									// region: 'west',
									html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
									width: 250,
									title: 'Students',
									resizable: true,
									resizeHandles: 'e',
									// style: {
									// 	borderRight: '2px solid #157FCC'
									// },
									collapsible: true,
									collapseDirection: 'left',
									tbar: [{
										xtype: 'label',
										text: 'Search'
									}, {
										xtype: 'textfield'
									}]
								},{
									region: 'center',
									flex: 1,
									xtype: 'tabpanel',
									items:[{
										title: 'By class',
										xtype: 'ClassesView'
									}, {
										title: 'All students',
										html: '<h2>Content appropriate for the current navigation.</h2>'
									}]
								}
							]
						},
						{
							title: 'Teachers',
							html: 'here are defined teachers'
						}
					]
				}
			]
		}
	]
});
