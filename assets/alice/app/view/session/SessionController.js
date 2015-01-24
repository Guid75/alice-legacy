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
	control: {
		'grid': {
			'selectionchange': function (grid, selected) {
				this.lookupReference('removeButton').setDisabled(selected.length === 0);
			}
		}
	},
	removeCurrentStudent: function () {
		var selection = this.lookupReference('grid').getSelection();
		var selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		Ext.Ajax.request({
			url: '/session/' + this.getView().currentSession + '/students/ ' + selected.id,
			method: 'DELETE',
			success: function () {
				this.lookupReference('grid').getStore().load({
					method: 'GET',
					url: '/session/' + this.getView().currentSession + '/students'
				});
			}.bind(this)
		});
	}
});
