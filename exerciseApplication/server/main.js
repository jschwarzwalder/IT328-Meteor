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
		activityCollection.remove({"_id": _id});
	},
	activityUpdate: function(updatedActivity){
		
	},
	getSingleActivity: function(_id){
		return activityCollection.findOne({"_id": _id});
	}
});

//publish data from the server for queries on the client side
Meteor.publish('activities', function(){
	//return all documents in the activities collection
	return activityCollection.find();
});