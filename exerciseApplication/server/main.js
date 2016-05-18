import { Meteor } from 'meteor/meteor';
import { activityCollection } from '../collections/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	activityInsert: function(activity) {
		activity.updatedOn = new Date();
		activityCollection.insert(activity);
	},
	activityDelete: function(_id) {
		activityCollection.remove({"_id": _id});
	},
	activityUpdate: function(updatedActivity) {
		activityCollection.update({"_id": updatedActivity._id}, {"$set": {
			"type": updatedActivity.type,
			"description": updatedActivity.description,
			"hours": updatedActivity.hours,
			"updatedOn": new Date()
		}});
	},
	getSingleActivity: function(_id) {
		return activityCollection.findOne({"_id": _id});
	}
});

Meteor.publish('activities', function() {
	//sort by most recent changes
	return activityCollection.find();
});