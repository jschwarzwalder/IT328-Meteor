import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//we need some initial data to work with
Template.messages.onCreated(function (){
	//create some initial data and store it in session
	Session.setDefault("messagesData", [
		{poster: "Arnold", message:"Hello IT 328"},
		{poster: "Jami", message:"Javascript is crazzzzy!"},
		{poster: "Josh", message:"Too many Joshes...."},
		{poster: "Paul", message:"Shouldn't there be an e"},
		{poster: "Paul", message:"Shouldn't there be quotes around that \'e'"},
		{poster: "Myriad", message:"MeeeeeeOOOW"}
	]);
});

Template.messages.helpers({
	getMessages: function () {
		return Session.get("messagesData");
	}
});