Ext.define('Alice.store.Periods', {
	extend: 'Ext.data.Store',
	alias: 'store.periods',
	requires: [
		'Alice.model.Period'
	],
	model: 'Alice.model.Period',
	autoLoad: true,
	sorters: 'startDate',
	listeners: {
		'load': function () {
			this.fireEvent('periodsLoaded');
		}
	},
	getCloserPeriodFromNow: function () {
		var
		now = new Date(),
		elected;

		// we suppose the store is already sorted by start date
		this.each(function (record) {
			if (now <= record.get('endDate')) {
				elected = record.id;
				return false;
			}
			return true;
		});
		return elected;
	}
});
