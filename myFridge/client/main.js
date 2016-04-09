/* 
	Jami Schwarzwalder
	4/8/2016
	Meteor in Action 
	Chapter 2
	My Fridge Application
 */
 
Products = new Mongo.Collection('products');
if (Meteor.isClient) {
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
	})
}
if (Meteor.isServer) {
 //...
}