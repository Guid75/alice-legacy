Ext.define('Alice.view.session.SessionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.session-session',
	listen: {
		controller: {
			'*': {
				'selectSession': function (sessionId) {
					this.getView().currentSession = sessionId;
					this.getViewModel().getStore('students').load({
						method: 'GET',
						url: '/session/' + sessionId + '/students'
					});
					this.getViewModel().getStore('timeslots').load({
						method: 'GET',
						url: '/session/' + sessionId + '/timeslots'
					});
				}
			}
		}
	},
	control: {
		'grid#students-grid': {
			'selectionchange': function (grid, selected) {
				this.lookupReference('removeStudentButton').setDisabled(selected.length === 0);
			}
		},
		'grid#timeslots-grid': {
			'selectionchange': function (grid, selected) {
				this.lookupReference('removeTimeslotButton').setDisabled(selected.length === 0);
			}
		}
	},
	removeCurrentStudent: function () {
		var grid = this.lookupReference('studentsGrid');
		var selection = grid.getSelection();
		var selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		Ext.Ajax.request({
			url: '/session/' + this.getView().currentSession + '/students/ ' + selected.id,
			method: 'DELETE',
			success: function () {
				grid.getStore().load({
					method: 'GET',
					url: '/session/' + this.getView().currentSession + '/students'
				});
			}.bind(this)
		});
	},
	removeCurrentTimeslot: function () {
		var grid = this.lookupReference('timeslotsGrid');
		var selection = grid.getSelection();
		var selected;

		if (selection.length === 0) {
			return;
		}
		selected = selection[0];

		Ext.Ajax.request({
			url: '/session/' + this.getView().currentSession + '/timeslots/ ' + selected.id,
			method: 'DELETE',
			success: function () {
				grid.getStore().load({
					method: 'GET',
					url: '/session/' + this.getView().currentSession + '/timeslots'
				});
			}.bind(this)
		});
	}
});
