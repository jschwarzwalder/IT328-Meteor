import { Meteor } from 'meteor/meteor';
import { bookmarksCollection } from '../collections/collections.js';
import { bookmarksDummyData } from '../collections/collections.js';

Meteor.startup(() => {
	//remove any database values that are present
	bookmarksCollection.remove({}); //delete all records (this will only work on the server)
		
	//add my dummy values
	for (var i=0; i < bookmarksDummyData.length; i++) {
		bookmarksCollection.insert(bookmarksDummyData[i]);
	}
		
	
});
