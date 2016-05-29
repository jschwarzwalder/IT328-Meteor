import {productsCollection } from '../collections/collections.js';

//defind some routes (associate URLS with templates)
Router.route('/', function(){
	this.render('productList');//view productList template
});

Router.route('/viewProduct/:_id', function(){
	this.render('viewProduct', {
		data:function() {
			//gather data for the view product template
			return productsCollection.findOne({"_id": this.params._id});
		}
	});//view viewProduct template
});

Router.route('/login', function(){
	this.render('login');//view login template
});

Router.route('/addProduct', function(){
	this.render('addProduct');//view login template
});

Router.route('/editProduct/:_id', function(){
	this.render('editProduct', {
		data: function(){
			//gather data for the view product template
			return productsCollection.findOne({'_id': this.params._id});
		}
	});//view login template
});

//use a hook to prevent unauthorized acces to templates with data
Router.onBeforeAction(function(){
	//make sure the user is logged in
	if (!Meteor.user() && !Meteor.loggingIn() ){
		this.redirect('/login');
	} else {
		this.next(); //tells the rounter to continue with its business
	}
}, { 
		except: ['login']
	}
);