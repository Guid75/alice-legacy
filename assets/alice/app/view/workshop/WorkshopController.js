Ext.define('Alice.view.workshop.WorkshopController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workshop-workshop',
	listen: {
		controller: {
			'*': {
				'selectWorkshop': function (workshopId) {
					var workshop = Alice.getApplication().getStore('Workshops').getById(workshopId);
					this.lookupReference('form').loadRecord(workshop);
				}
			}
		}
	}
});
