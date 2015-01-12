Ext.define('Alice.view.session.Main', {
    extend: 'Ext.panel.Panel',

	alias: 'widget.session-main',
    controller: 'session-main',
    viewModel: {
        type: 'session-main'
    },

    html: 'Here are defined all sessions (yes)'
});
