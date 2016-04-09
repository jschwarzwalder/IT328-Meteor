/* 
	Jami Schwarzwalder
	4/8/2016
	Meteor in Action 
	Chapter 2
	My Fridge Application
 */
 import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
Products = new Mongo.Collection('products');

if (Meteor.isServer) {
	Meteor.startup(function () {
		 Products.remove({});
		 
		 // fill the database with some products
		 Products.insert({
			 name: 'Milk',
			 img: '/img/milk.png',
			 place: 'fridge'
		 });
		
		 Products.insert({
			 name: 'Bread',
			 img: '/img/bread.png',
			 place: 'supermarket'
		 });
		 
		  Products.insert({
			 name: 'Juice',
			 img: '/img/juice.png',
			 place: 'fridge'
		 });
		 
		  Products.insert({
			 name: 'Banana',
			 img: '/img/banana.png',
			 place: 'supermarket'
		 });
		 
		 
	});
}
