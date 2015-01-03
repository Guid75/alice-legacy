Ext.define('Alice.view.formation.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.formationadd',
	requires: [
		'Alice.view.formation.AddController',
		'Alice.view.formation.AddModel'
	],

    controller: 'formationadd',
    viewModel: {
        type: 'formationadd'
    },

	title: 'Add a new formation',

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
						text: 'Create formation',
						handler: 'onCreateFormation'
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
