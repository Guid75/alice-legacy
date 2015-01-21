Ext.define('Alice.view.session.Session', {
    extend: 'Ext.panel.Panel',

	alias: 'widget.session-session',

	requires: [
		'Alice.view.session.SessionController',
		'Alice.view.session.SessionModel'
	],

    controller: 'session-session',
    viewModel: {
        type: 'session-session'
    },

    html: 'Hello, World!!'
});
