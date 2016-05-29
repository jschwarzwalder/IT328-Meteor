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
		
		//insert a new record (asynchronously)
		Metor.call('productInsert', {
			name: $('input[name="name"]').val(),
			price: $('input[name="price"]').val(),
			description: $('textarea[name="description"]').val()
		}, function(error, result) {
			Router.go('/viewProduct/' + result);
		});
	}
	
});


Template.editProduct.events({
	'submit #editProductForm': function(event) {
		//stop the form from refreshing the page
		event.preventDefault();
		
		//get my data context (product)
		var product = this;
		
		//get updated values from our form
		product.name = $('input[name="name"]').val();
		product.price = $('input[name="price"]').val();
		product.description = $('textarea[name="description"]').val();
		
		//save the updates to the server side database
		Meteor.call('productUpdate', product, function(error, result){
			//redirect to see the updated record
			Router.go('/viewProduct/' + product._id);
		});
	}
})