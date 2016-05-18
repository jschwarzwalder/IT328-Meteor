import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { activityCollection } from '../collections/collections.js';

import './main.html';

Meteor.subscribe('activities');

//event map for add activity form
Template.newActivity.events ({
	'submit #enterActivity': function(event){
		//stop the form from submitting
		event.preventDefault();
		
		//we need a JSON document
		var newDocument = {
			"type": $('#activityType').val(), 
			"description": $('#activityDescription').val(), 
			"hours": $('#activityHours').val()
		};
		
		//call(method, inputs)
		Meteor.call('activityInsert',newDocument);
		
		//empty out text boxes ie clear the form
		$('activityDescription').val('');
		$('activityHours').val('');
	}
})


//helpers for view all activities
Template.viewActivities.helpers({
	getAllActivities: function(){
		return activityCollection.find();
	}
});

Template.viewActivities.events({
	'click a.delete': function(event){
		
		//stop the link from refreshing the page, and get the activity id!
		event.preventDefault();
		
		var _id = $(event.target).data('id');
		
		//delete the activity
		Meteor.call('activityDelete', _id);
		
		
	}, 'click a.edit': function(event){
		
		//stop the link from refreshing the page, and get the activity id!
		event.preventDefault();
		
		var _id = $(event.target).data('id');
		
		//retrieve the activity from the server side and save to session
		
		//I"m using an "annonymous function"as a "callback" here
		var activity = Meteor.call('getSingleActivty', _id, function(error, result){
			Session.set('editedActivity', result);
			
		}
	}, 
	
});
//helpers for view all activities
Template.viewActivities.helpers ({
	getAllActivities: function(){
		return activtyCollection.find();
	}
})

Template.editActivity.helpers({
	getEditedActivity: function(){
		return Session.get('editedActivity');
	}, 
	getSelected: function(possibleType) {
		var editedActivity = Session.get('editedActivity');
		if (editedActivity != undefined) {
			return editedActivity.type == possibleType ? 'selected' : '';
		} else {
			return '';
		}
	}
})

Template.editActivity.events({
	'submit #editActivity': function(event){
		event.preventDefault();
		
		var editedActivity = Session.get('editedActivity');
		if (editedActivity != undefined)
		{
			//retrieve new values
			var newType = $('#editedActivityType').val();
			var newDescription = $('#editedActivityDescription').val();
			var newHours = $('#editedActivityHours').val();
			
			//assign my new values
			editedActivity.type = newType;
			editedActivity.description = newDescription;
			editedActivity.hours = newHours;
			
			//send my new document 
			Meteor.call('activityUpdate', editedActivity);
		}
	}
})