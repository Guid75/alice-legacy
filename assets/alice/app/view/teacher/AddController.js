Ext.define('Alice.view.teacher.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teacheradd',
	requires: [
		'Alice.model.Teacher',
		'Alice.String'
	],
	control: {
		'textfield[name=firstName]': {
			change: function (textfield, newValue, oldValue) {
				console.log(this);
				this.fillAutoLogin({ oldFirstName: oldValue });
			}
		},
		'textfield[name=lastName]': {
			change: function (textfield, newValue, oldValue) {
				this.fillAutoLogin({ oldLastName: oldValue });
			}
		}
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
	onCreateTeacher: function () {
		var store = Ext.create('Ext.data.Store', {
			model: 'Alice.model.Teacher'
		});
		store.add({ firstName: this.lookupReference('firstNameField').getValue(),
					lastName: this.lookupReference('lastNameField').getValue(),
					login: this.lookupReference('loginField').getValue() });
		store.sync({
			success: function () {
				this.getView().fireEvent('teacherCreated');
				this.closeView();
			}.bind(this)
		});
	}
});
