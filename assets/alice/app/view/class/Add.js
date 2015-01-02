Ext.define('Alice.view.class.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.classadd',
	requires: [
		'Alice.view.class.AddController',
		'Alice.view.class.AddModel'
	],

    controller: 'classadd',
    viewModel: {
        type: 'classadd'
    },

	title: 'Add a new class',

	layout: 'fit',

	defaultFocus: 'label',

	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				fieldDefaults: {
					labelAlign: 'right',
					labelWidth: 115// ,
					// msgTarget: 'side'
				},
				bodyPadding: 10,
				defaults: {
					anchor: '100%'
				},
				defaultType: 'textfield',
				buttons: [
					{
						text: 'Create class',
						handler: 'onCreateClass'
					},
					{
						text: 'Cancel',
						handler: 'closeView'
					}
				],
				items: [
					{
						allowBlank: false,
						fieldLabel: 'Label',
						name: 'label',
						reference: 'labelField',
						itemId: 'label'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
