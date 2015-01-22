Ext.define('Alice.view.session.SessionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.session-session',
	listen: {
		controller: {
			'*': {
				'selectSession': function (sessionId) {
					this.getView().currentSession = sessionId;
					this.lookupReference('grid').getStore().load({
						method: 'GET',
						url: '/session/' + sessionId + '/students'
					});
				}
			}
		}
	},
	config: {
		control: {
			'grid': {
				drop: function () {
					console.log('drop');
				}
			}
		}
	}
});
