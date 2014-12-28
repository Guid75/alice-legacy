
Ext.define("Alice.view.AddStudent",{
    extend: "Ext.window.Window",

	alias: 'widget.addstudent',
	requires: [
		'Alice.view.AddStudentController',
		'Alice.view.AddStudentModel',
		'Alice.model.Class'
	],

    controller: "addstudent",
    viewModel: {
        type: "addstudent"
    },

	title: 'Add a new student',

	layout: 'fit',

	defaultFocus: 'firstName',

	initComponent: function () {
		var classesStore = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Class',
			autoLoad: true
		});

		this.items = [
			{
				xtype: 'form',
				fieldDefaults: {
					labelAlign: 'right',
					labelWidth: 115,
					msgTarget: 'side'
				},
				bodyPadding: 10,
				defaults: {
					anchor: '100%'
				},
				defaultType: 'textfield',
				buttons: [
					{
						text: 'Create student',
						handler: 'onCreateStudent'
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
						id: 'addstudent-firstname',
						itemId: 'firstName'
					},
					{
						allowBlank: false,
						fieldLabel: 'Last name',
						name: 'lastName',
						reference: 'lastNameField',
						id: 'addstudent-lastname'
					},
					{
						xtype: 'combo',
						fieldLabel: 'Class',
						reference: 'classField',
						name: 'class',
						store: classesStore,
						displayField: 'label',
						valueField: 'id',
						queryParam: false,
						value: this.classId
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
