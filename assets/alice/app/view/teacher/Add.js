Ext.define('Alice.view.teacher.Add', {
    extend: 'Ext.window.Window',

	alias: 'widget.teacheradd',
	requires: [
		'Alice.view.teacher.AddController',
		'Alice.view.teacher.AddModel',
		'Alice.model.Class'
	],

    controller: 'teacheradd',
    viewModel: {
        type: 'teacheradd'
    },

	title: 'Add a new teacher',

	layout: 'fit',

	defaultFocus: 'firstName',

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
						text: 'Create teacher',
						handler: 'onCreateTeacher'
					},
					{
						text: 'Cancel',
						handler: 'closeView'
					}
				],
				items: [
					{
						allowBlank: false,
						fieldLabel: 'First name',
						name: 'firstName',
						reference: 'firstNameField',
						itemId: 'firstName'
					},
					{
						allowBlank: false,
						fieldLabel: 'Last name',
						name: 'lastName',
						reference: 'lastNameField'
					},
					{
						allowBlank: false,
						fieldLabel: 'Login',
						name: 'login',
						reference: 'loginField'
					}
				]
			}
		];
		this.callParent(arguments);
	}
});
