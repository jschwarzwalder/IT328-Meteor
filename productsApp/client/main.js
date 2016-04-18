import './main.html';

function onSale() {
	if (this.salesPrice == 0){
		return false;
	}
	return true;
}

var products = [
    {
        productId: 0,
        productName: "Harry Potter and the Sorcerer's Stone",
        productDescription: "Harry Potter is just a regular boy, or is he? He is about \
                             to embark on a wonderful and magical adventure at Hogwarts \
                             School of Witchcraft and Wizardry. ",
        quantity: 13,
        image: "harrypotter.jpg",
        keywords: ["children", "books", "fantasy"],
        price: 19.99,
        salesPrice: 0.0,
		onSale: onSale
		
    }, 
    {
        productId: 1,
        productName: "Barbie Birthday Doll",
        productDescription: "The perfect gift for any child during his birthday. Sparkling \
                             and beautiful, Barbie is now a modern girl. Arrange her hair, \
                             change her make-up, hack a computer, or pick one of several outfits.",
        quantity: 80,
        image: "barbie.jpg",
        keywords: ["children", "dolls", "barbie"],
        price: 9.99,
        salesPrice: 6.99,
		onSale: onSale
    }, 
    {
        productId: 2,
        productName: "Apple iPhone x",
        productDescription: "Bigger and better, the iPhone 6 has a new zeon processor and \
                             a new 6.55 inch screen for your viewing pleasure. Apple eye-view \
                             also gives you zoom capabilities at 1000% normal.",
        quantity: 0,
        image: "iphone.jpg",
        keywords: ["phone", "Apple", "iPhone", "smart phone"],
        price: 199.99,
        salesPrice: 179.99,
		onSale: onSale
    },
    {
        productId: 3,
        productName: "Basketball",
        productDescription: "This regulation size basketball will satisfy any outdoor \
                             enthusiast. Durable and resistent to wear, this ball will \
                             last hours without the need to re-inflate.",
        quantity: 0,
        image: "basketball.png",
        keywords: ["basketball", "sports", "NBA"],
        price: 19.99,
        salesPrice: 14.99,
		onSale: onSale
    },
    {
        productId: 4,
        productName: "Vacation Poster",
        productDescription: "Have you been dreaming of that vacation you keep putting off? \
                             Hang this poster in your office and you will be there before \
                             you arrive! Made with only quality materials.",
        quantity: 0,
        image: "poster.jpg",
        keywords: ["vacation", "sunny", "beach", "poster", "colorful"],
        price: 4.99,
        salesPrice: 0,
		onSale: onSale
    },
];

Session.set("product", products);