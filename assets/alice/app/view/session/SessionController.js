Ext.define('Alice.view.session.SessionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.session-session',
	listen: {
		controller: {
			'*': {
				'selectSession': function (sessionId) {
					this.lookupReference('grid').getStore().load({
						method: 'GET',
						url: '/session/' + sessionId + '/students'
					});
				}
			}
		}
	}
});
