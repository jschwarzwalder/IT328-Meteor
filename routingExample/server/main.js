import { Meteor } from 'meteor/meteor';
import { productsCollection } from '../collections/collections.js';

Meteor.startup(() => {
	Meteor.call('addDummyData');
});

Meteor.methods({
	productinsert: function(product) {
		//return the id of the new record
		return productsCollection.insert(product);
	}, 
	productDelete: function(_id){
		productsCollection.remove({"_id": _id});
	}, 
	productUpdate: function(updatedProduct){
		productsCollection.update({"_id": updatedProduct._id}, {"$set": {
			name: updatedProduct.name,
			price: updatedProduct.price,
			description: updatedProduct.description
			
		}});
	}
})

Meteor.publish('allProducts', function(){
	return.productsCollection.find();
});