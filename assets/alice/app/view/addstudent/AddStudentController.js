Ext.define('Alice.view.AddStudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addstudent',
	requires: [
		'Alice.model.Student'
	],
	refs: [
		{
			ref: 'login',
			selector: 'textfield[name=login]'
		},
		{
			ref: 'window',
			selector: 'addstudent'
		}
	],

	init: function () {
		var me = this;
		this.control({
			'textfield[name=firstName]': {
				change: function (textfield, newValue, oldValue) {
					me.fillAutoLogin({ oldFirstName: oldValue });
				}
			},
			'textfield[name=lastName]': {
				change: function (textfield, newValue, oldValue) {
					me.fillAutoLogin({ oldLastName: oldValue });
				}
			}
		});
	},
	fillAutoLogin: function (config) {
		var
		firstName = this.lookupReference('firstNameField').getValue(),
		lastName = this.lookupReference('lastNameField').getValue(),
		loginField = this.lookupReference('loginField'),
		oldStandardLogin;

		if (!firstName || !lastName) {
			return;
		}

		oldStandardLogin = (config.oldFirstName || firstName).toLowerCase() + '.' +
			(config.oldLastName || lastName).toLowerCase();

		if (loginField.getValue() !== oldStandardLogin && loginField.getValue()) {
			return;
		}

		loginField.setValue(firstName.toLowerCase() + '.' + lastName.toLowerCase());
	},
	onCancel: function () {
		this.closeView();
	},
	onCreateStudent: function () {
		var store = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Student'
		});
		store.add({ firstName: this.lookupReference('firstNameField').getValue(),
					lastName: this.lookupReference('lastNameField').getValue(),
					class: this.lookupReference('classField').getValue() });
		store.sync({
			success: function () {
				console.log(this.getView());
				this.getView().fireEvent('studentCreated');
				this.closeView();
			}.bind(this)
		});
	}
});
