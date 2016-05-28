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