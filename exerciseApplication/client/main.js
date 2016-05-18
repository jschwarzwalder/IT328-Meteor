import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.newActivity.events ({
	'submit #enterActivity': function(event){
		//stop the form from submitting
		event.preventDefault();
		
		//we need a JSON document
		var newDocument = {
			"type": $('#activityType').val(), 
			"description": $('#activityDescription').val(), 
			"hours": $('#activityHours').val()
		}
	}
})
