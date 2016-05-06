import { Meteor } from 'meteor/meteor';
import { bookmarkCollection } from '../collection/collections.js';
import { bookmarksDummyData } from '../collection/collections.js';

Meteor.startup(() => {
	//remove any database values that are present
	bookmarkCollection({}); //delete all records (this will only work on the server)
		
	//add my dummy values
	for (var i=0; i < bookmarksDummyData.length; i++) {
		bookmarkCollection.insert(bookmarksDummyData[i]);
	}
		
	
});
