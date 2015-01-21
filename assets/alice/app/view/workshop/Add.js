Ext.define('Alice.view.workshop.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.workshop-add',
	requires: [
		'Alice.view.workshop.AddController',
		'Alice.view.workshop.AddModel'
	],

    controller: 'workshop-add',
    viewModel: {
        type: 'workshop-add'
    },

	title: 'Add a new workshop',

	layout: 'fit',

	defaultFocus: 'label',

	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				reference: 'form',
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
						text: 'Create workshop',
						handler: 'onCreateWorkshop'
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
