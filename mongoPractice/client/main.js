import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarkCollection } from '../collection/collections.js';
//tempoarily holds cache of files form server - miniMongo

import './main.html';

Template.bookmarks.helpers({
	bookmarksList: function(){
		//retreve all bookmarks from our collection
		return bookmarkCollection.find();
	}
})