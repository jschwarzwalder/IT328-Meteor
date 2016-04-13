import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Products = new Mongo.Collection('products');


Template.fridge.onRendered(function () {
	this.$('#fridge').droppable({
	  drop: function (evt, ui) {
		  //Get the database ID from the HTML attribute data-id
		var query = { _id: ui.draggable.data('id')};
		//Set the update statement to set place to fridge
		var changes = { $set: { place: 'fridge' } };
		//Perform the database update
		Products.update(query, changes);
	  }
	});
});

Template.productList.onRendered(function() {
	 var templateInstance = this;
	 
	 
});
Template.productListItem.onRendered(function() {
 var templateInstance = this;
	
});


Template.fridge.helpers({
	 products: function () {
		 return Products.find({
			place: 'fridge'
		 });
	 }
});
Template.productList.helpers({
	 products: function () {
		 return Products.find({
			place: 'supermarket'
		 });
	 }
});

Template.productList.onRendered(function () {
    var templateInstance = this;


  });
  
