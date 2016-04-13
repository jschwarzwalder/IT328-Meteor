//store this outside the isClient and isServer conditions
Products = new Mongo.Collection('products'); //available to server and client

if (Meteor.isClient) {
  //items in fridge
  Template.fridge.helpers({
    products: function() {
      return Products.find({
        place: "fridge"
      });
    }
  });

  //items in super market
  Template.productList.helpers({
    products: function() {
      return Products.find({
        place: "supermarket"
      });
    }
  });

  Template.fridge.onRendered(function() {
    //directly from jQueryUI at https://jqueryui.com/droppable/
    this.$('#fridge').droppable({
      drop: function(event, ui) {
        //set any object dropped onto the fridge as place=fridge
        Products.update(
          {_id: ui.draggable.data('id')}, //query
          {$set: {place: "fridge"}}); //changes

      }
    });
  });

  Template.productList.onRendered(function() {
    this.$('#supermarket').droppable({
      drop: function(event, ui) {
        //set any object dropped onto the fridge as place=fridge
        Products.update(
          {_id: ui.draggable.data('id')}, //query
          {$set: {place: "supermarket"}}); //changes

      }
    });
  })

  //set each food item to be able to be dragged
  Template.productListItem.onRendered(function() {
    //sets each element with the draggable class
    this.$('.draggable').draggable({
      cursor: "move",
      helper: "clone"
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    //clear old data values
    Products.remove({});

    //fill the database with some products
    Products.insert({
      name: "Milk",
      img: "/milk.png",
      place: "fridge"
    });

    Products.insert({
      name: "Bread",
      img: "/bread.png",
      place: "supermarket"
    });
  });
}
