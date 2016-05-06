import { Meteor } from 'meteor/meteor';
import { bookmarkCollection } from '../collections/collections.js';
import { bookmarksDummyData } from '../collections/collections.js';

Meteor.startup(() => {
	//remove any database values that are present
	bookmarkCollection({}); //delete all records (this will only work on the server)
		
	//add my dummy values
	for (var i=0; i < bookmarksDummyData.length; i++) {
		bookmarkCollection.insert(bookmarksDummyData[i]);
	}
		
	
});
