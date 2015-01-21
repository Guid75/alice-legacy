Ext.define('Alice.view.workshop.Workshop', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.workshop-workshop',
    controller: 'workshop-workshop',
	requires: [
		'Alice.view.workshop.WorkshopController',
		'Alice.view.workshop.WorkshopModel'
	],
    viewModel: {
        type: 'workshop-workshop'
    },

	items: [
		{
			xtype: 'form',
			margin: 10,
			reference: 'form',
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'Label',
					name: 'label'
				},
				{
					xtype: 'textareafield',
					fieldLabel: 'Comment',
					name: 'comment'
				}
			]
		}
	]
});
