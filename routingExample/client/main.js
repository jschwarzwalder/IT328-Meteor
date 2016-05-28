import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { productsCollection } from '../collections/collections.js';

import './main.html';

//import my products collecation and make it available to a template

Meteor.subscribe('allProducts');

Template.productList.helpers({
	products: function(){
		return productsCollection.find();
	}
})
