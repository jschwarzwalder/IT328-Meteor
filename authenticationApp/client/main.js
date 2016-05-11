import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//pull down some published data from the server
Meteor.subscribe('userData');
userData = new Mongo.Collection('userData');

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});