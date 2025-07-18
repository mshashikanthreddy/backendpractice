const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    
    static addProduct(id, productPrice) {
        // fetch the previous cart

        fs.readFile(p, (err,fileContent) => {
            let cart = {products : [] , totalPrice : 0 };
            if(!err)
            {
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id); // here we are using findIndex when the product is already existed 
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;  
            // add new product , increase quantity , total price increase. 
            if(existingProduct) {
                updatedProduct = {...existingProduct}; //adds existing product (cloning) ex:- if we buy same product again we just increase quantity,price not again remove and adding it. 
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id : id, qty : 1};
                cart.products = [...cart.products, updatedProduct]; // using 'spread' combining existed one with upadted product to form new array.
            }
            cart.totalPrice = cart.totalPrice + +productPrice; // herewe adding + infront of product price to make it anumber while calculating total price.
            fs.writeFile(p, JSON.stringify(cart) , (err) => {
                console.log(err);
            })
        })
        
    }

static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return;
        }
        const cart = JSON.parse(fileContent);
        const updatedCart = {...cart};
        const product= updatedCart.products.find(prod => prod.id === id);
         if(!product){
            return;
        }
        const productQty = product.qty;
        updatedCart.products = updatedCart.products.filter(
            prod => prod.id !== id
        );
        updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
        fs.writeFile(p, JSON.stringify(updatedCart), err => {
            console.log(err);
        })
    })
 }
 static getCart(cb) {
    fs.readFile(p, (err , fileContent) => {
        const cart = JSON.parse(fileContent);
        if(err){
            cb(null);
        }
        else{
            cb(cart);
        }
    })
}

}