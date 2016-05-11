import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

//publish data that a client may or maynot want
Meteor.publish('userData', function(){
	//is there a logged in user?	
	if (this.userId){
		//verify that user is logged in //Meteor.user() will work too
		
		return Meteor.users.find({'_id': this.userId})
	} else {
		
	}
});