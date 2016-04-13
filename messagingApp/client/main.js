import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.templateName.onCreated(function() {
	/* 
		Called when inserting a template into the DOM.
		Good for saving/loading values that will be used with a template.
		Template instance accessible, not visible
	*/
	
	console.log("onCreated has been called")
});