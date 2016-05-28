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
	, 
	addDummyData: function() {
		productsCollection.remove({});
		
		productsCollection.insert ( {
			name: 'Clean Bright Soap',
			price: 1.99, 
			description: 'Another work day required clean bright soap!'
		});
		
		productsCollection.insert ( {
			name: 'Ever After',
			price: 19.99, 
			description: 'You are but a pebble in my shoe'
		});
		
		productsCollection.insert ( {
			name: 'Harry Potter and the Deathly Hallows',
			price: 12.99, 
			description: 'And Death greeted him as an old friend'
		});
		
		productsCollection.insert ( {
			name: 'Sparkle Hair Clip',
			price: 4.99, 
			description: 'Be Agressive! Passive Agressive! now with no hair in your face!'
		});
		
		productsCollection.insert ( {
			name: 'Sargento Snack Pack',
			price: 6.99, 
			description: 'Cranberries, Almonds, and White Cheddar'
		});
	}
})

Meteor.publish('allProducts', function(){
	return productsCollection.find();
});