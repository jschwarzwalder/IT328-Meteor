import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarksCollection } from '../collections/collections.js';
//tempoarily holds cache of files form server - miniMongo

import './main.html';

Template.bookmarks.helpers({
	bookmarksList: function(){
		//retreve all bookmarks from our collection
		return bookmarksCollection.find();
	}
})