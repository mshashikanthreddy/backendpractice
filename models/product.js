const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
     getProductsFromFile(products => {
      if(this.id){
        const existingProductIndex = products.findIndex(prod => prod.id === this.id);
        const updatedProducts = [...products];
       updatedProducts[existingProductIndex] = this;  // Here "this" refers to "Product" class
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {   //here we use updated products as it replace with new data as we performm editing
          console.log(err);
        });
      }
      else
      {
      this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);    // checks all products to match condition and make it like an array.
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {                                                               // which "findIndex returns product which it intially finds not check all products."
         if(!err){
            Cart.deleteProduct(id ,product.price);
         }
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);    // this is default javascript method which checks all products and returns data if the condition is true
      cb(product);
    })
  }

  
  
};