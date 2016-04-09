/* 
	Jami Schwarzwalder
	4/8/2016
	Meteor in Action 
	Chapter 2
	My Fridge Application
 */
 
Products = new Mongo.Collection('products');


Template.fridge.onRendered(function () {
	var templateInstance = this;

	templateInstance.$('#fridge').droppable({
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
	 
	 templateInstance.$('#supermarket').droppable({
		 drop: function(evt, ui) {
			 var query = { _id: ui.draggable.data('id') };
			 //Set the place attribute to supermarket when products are dropped
			 var changes = { $set: { place: 'supermarket' } };
			 Products.update(query, changes);
		 }
	 });
});
Template.productListItem.onRendered(function() {
 var templateInstance = this;
	templateInstance.$('.draggable').draggable({
	  cursor: 'move',
	  helper: 'clone'
	});
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
  
