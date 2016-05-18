import { Meteor } from 'meteor/meteor';
import { activityCollection } from '../collections/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
});

//insert, update, and delete functionality through
//secure Meteor methods
Meteor.methods ({
	activityInsert: function(activity){
		activityCollection.insert(activity);
	}, 
	activityDelete: function(_id){
		
	},
	activityUpdate: function(updatedActivity){
		
	}
});