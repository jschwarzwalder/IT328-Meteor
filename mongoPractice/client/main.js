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
});

Template.addBookmarkForm.events({
	'submit .addBookmarkForm': function(event){
		event.preventDefault(); //stop the form from posting back to the same page...
		
		//get my form values
		var name = $('#bookmarkName').val();
		var url = $('#bookmarkUrl').val();
		
		//insert a new document inot our collection
		bookmarksCollection.insert({
			"name": name,
			"url": url,
			"lastVisited": new Date()
		})
	}
});

Template.bookmarksHeading.events({
	'click button': function(event){
		if (confirm("Really delete all bookmarks?")) {
			bookmarksCollection.remove({};)
		}
	}
})