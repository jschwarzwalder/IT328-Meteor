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
});

Template.addProduct.events({
	'submit #addProductForm': function(event) {
		//stop the form from refreshing the page
		event.preventDefault();
		
		//insert a new record
		Metor.call('productInsert', {
			name: $('input[name="name"]').val(),
			price: $('input[name="price"]').val(),
			description $('textarea[name="description"]').val()
		})
	}
	
});
