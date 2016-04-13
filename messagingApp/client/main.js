import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.addMessageForm.onCreated(function() {
	/* 
		Called when inserting a template into the DOM.
		Good for saving/loading values that will be used with a template.
		Template instance accessible, not visible
	*/
	
	//save some initial data for our messaging application
	
	Session.setDefault('messages', []);
	Session.setDefault('searchResults', []);
	
	console.log("onCreated() has been called")
});

Template.addMessageForm.onRendered(function(){
	/*
		Used to initiate objects that are already in the DOM
		(jQuery UI) -- event to respond once elements have been built
		
		Template instance accessible, visible
	*/
	
	console.log("onRendered() has been called")
});

Template.addMessageForm.onDestroyed(function(){
	/*
		Used to clean up after a template is no longer used
		
		Template instance not accessible, not visible
	*/
	
});

Template.addMessageForm.events({
	'submit .newMessage': function(event, template){
		//prevent the form from refreshing the page
		event.preventDefault();
		
		//get our form value (message text)
		var messageText = $('messageText').val();
		$('#messageText').val('');//clearing text box so you can type in new message
		
		//get our data source (from session)
		var messages = Session.get('messages');
		
		//save our message
		messages.push({
			messageText: messageText ,
			postedOn: new Date()
		})
	}
});
