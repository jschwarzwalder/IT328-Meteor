/* 
	Jami Schwarzwalder
	4/8/2016
	Meteor in Action 
	Chapter 2
	My Fridge Application
 */
 
Products = new Mongo.Collection('products');

if (Meteor.isClient) {
	Template.fridge.onRendered(function () {
		var templateInstance = this;

		templateInstance.$('#fridge').droppable({
		  drop: function (evt, ui) {
			var query = {
			  _id: ui.draggable.data('id')
			};
			var changes = {
			  $set: {
				place: 'fridge'
			  }
			};
			Products.update(query, changes);
		  }
		});
	});
}

Template.productList.onRendered(function () {
    var templateInstance = this;

    templateInstance.$('#supermarket').droppable({
      drop: function (evt, ui) {
        var query = {
          _id: ui.draggable.data('id')
        };
        var changes = {
          $set: {
            place: 'supermarket'
          }
        };
        Products.update(query, changes);
      }
    });

  });
  
if (Meteor.isServer) {
	Meteor.startup(function () {
		 Products.remove({});
		 
		 // fill the database with some products
		 Products.insert({
			 name: 'Milk',
			 img: '/milk.png',
			 place: 'fridge'
		 });
		 Products.insert({
			 name: 'Bread',
			 img: '/bread.png',
			 place: 'supermarket'
		 });
	});
}

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