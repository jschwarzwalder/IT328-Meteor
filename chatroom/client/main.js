import { Template } from 'meteor/templating';

import './main.html';

//we need some initial data to work with
Template.messages.onCreated(function messagesOnCreate(){
	//create some initial data and store it in session
	Session.setDefault("messagesData, [
		{poster: "Arnold", message:"Hello IT 328"},
		{poster:"Jami", message:"Javascript is crazzzzy!"},
		{poster: "Josh", message:"Too many Joshs...."}
	]")
});

Template.messages.helpers({
	getMessages: function () {
		return Session.get("messagesData";)
	}
});


