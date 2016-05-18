import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { activityCollection } from '../collections/collections.js';

import './main.html';

Meteor.subscribe('activities');

Template.newActivity.events({
	'submit #enterActivity': function(event) {
		event.preventDefault();

		//create a new activity document
		var newDocument = {
			type: $('#activityType').val(),
			description: $('#activityDescription').val(),
			hours: $('#activityHours').val()
		};

		//insert our new record on the server side
		Meteor.call('activityInsert', newDocument);

		//clear form elements
		$('#activityDescription').val('');
		$('#activityHours').val('');
	}
});

Template.viewActivities.events({
	'click a.delete': function(event) {
		event.preventDefault();

		var _id = $(event.target).data('id');
		Meteor.call('activityDelete', _id);
	},
	'click a.edit': function(event) {
		event.preventDefault();

		//get the editing record and save to session
		var _id = $(event.target).data('id');

		//format method('methodName', param1, param2, ... paramn, callback)
		Meteor.call('getSingleActivity', _id, function(error, result) {
			//asynchronous callback
			Session.set('editedActivity', result);
		});
	}
});

Template.editActivity.events({
	'submit #editActivity': function(event) {
		event.preventDefault();

		var editedActivity = Session.get('editedActivity');

		if (editedActivity != undefined)
		{
			var newType = $('#editActivityType').val();
			var newDescription = $('#editActivityDescription').val();
			var newHours = $('#editActivityHours').val();

			editedActivity.type = newType;
			editedActivity.description = newDescription;
			editedActivity.hours = newHours;

			Meteor.call('activityUpdate', editedActivity);

			//delete the session key/value
			delete Session.keys['editedActivity'];

			//clear form elements
			$('#editActivityType').val('');
			$('#editActivityDescription').val('');
			$('#editActivityHours').val('');
		}
	}
});

Template.viewActivities.helpers({
	getAllActivities: function() {
		//must be done on the client side, will not sort through publications
		return activityCollection.find({}, {"sort": {"updatedOn": -1}});
	}
});

Template.editActivity.helpers({
	getEditedRecord: function() {
		return Session.get('editedActivity');
	},
	getType: function(type) {
		if (Session.get('editedActivity') != undefined)
		{
			return Session.get('editedActivity').type == type ? 'selected' : 'none';
		}
		else
		{
			return '';
		}
	}
});

Template.registerHelper('prettyDate', function(date) {
	return date.toLocaleDateString() + '  ' + date.toLocaleTimeString();
});
