Ext.define('Alice.view.student.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentadd',
	requires: [
		'Alice.model.Student',
		'Alice.String'
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
	_forgeLogin: function (firstName, lastName) {
		return Alice.String.removeDiacritics(firstName).toLowerCase() + '.' +
			Alice.String.removeDiacritics(lastName).toLowerCase();
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

		oldStandardLogin = this._forgeLogin(config.oldFirstName || firstName,
											config.oldLastName || lastName);

		if (loginField.getValue() !== oldStandardLogin && loginField.getValue()) {
			return;
		}

		loginField.setValue(this._forgeLogin(firstName, lastName));
	},
	onCancel: function () {
		this.closeView();
	},
	onCreateStudent: function () {
		var
		store = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Student'
		}),
		studentLabel = this.lookupReference('firstNameField').getValue() + ' ' +
			this.lookupReference('lastNameField').getValue();

		store.add({ firstName: this.lookupReference('firstNameField').getValue(),
					lastName: this.lookupReference('lastNameField').getValue(),
					class: this.lookupReference('classField').getValue(),
					login: this.lookupReference('loginField').getValue() });
		store.sync({
			success: function () {
				this.getView().fireEvent('studentCreated', studentLabel);
				this.closeView();
			}.bind(this)
		});
	}
});
