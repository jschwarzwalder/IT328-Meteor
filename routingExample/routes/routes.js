import {productsCollection } from '../collections/collections.js';

//defind some routes (associate URLS with templates)
Router.route('/', function(){
	this.render('productList');//view allProducts template
});