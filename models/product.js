const db = require('../util/database');

const Cart = require('./cart');



module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl]
     );
  }

  static deleteById() {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM PRODUCTS WHERE products.id = ?',{id});
  }

  
  
};