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
})