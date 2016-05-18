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
		var activity = Meteor.call('getSingleActivty', _id);
	}, 
	
});