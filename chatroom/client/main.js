import { Template } from 'meteor/templating';

import './main.html';

//we need some initial data to work with
Template.messages.onCreated(function messagesOnCreate(){
	//create some initial data and store it in session
	Session.setDefault()
	
});
