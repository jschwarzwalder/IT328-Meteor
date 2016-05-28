import {productsCollection } from '../collections/collections.js';

//defind some routes (associate URLS with templates)
Router.route('/', function(){
	this.render('productList');//view productList template
});

Router.route('/viewProduct', function(){
	this.render('viewProduct');//view viewProduct template
});