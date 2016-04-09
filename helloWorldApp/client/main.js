import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

if (Meteor.isClient){
	// used prior to Meteor 1.3.1
};

if (Meteor.isServer){
	//used prior to Meteor 1.3.1
	Meteor.startup(function(){
		//code to run on server at startup
	});
};