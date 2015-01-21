/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Alice.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

	init: function () {
		this.listen({
			store: {
				'*': {
					periodsLoaded: function () {
						var
						periodCombo = this.lookupReference('periodCombo'),
						store = Alice.getApplication().getStore('Periods'),
						now = new Date(),
						elected;

						if (periodCombo.loadedOnce) {
							return;
						}
						periodCombo.loadedOnce = true;
						elected = store.getCloserPeriodFromNow();
						if (elected !== undefined) {
							periodCombo.setValue(elected);
						}
					}.bind(this)
				}
			}
		});
	},

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
