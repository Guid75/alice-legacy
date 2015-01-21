/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Alice.Application', {
    extend: 'Ext.app.Application',

    name: 'Alice',

    stores: [
		'Formations',
		'Teachers',
		'Periods',
		'Timeslots',
		'Workshops'
    ],

	controllers: [
		'Student',
		'Formation',
		'Teacher',
		'Period',
		'Timeslot',
		'Workshop'
	],

    launch: function () {
        // TODO - Launch the application
		Ext.ns('Alice.globals');
    }
});
