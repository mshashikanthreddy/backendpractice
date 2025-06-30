const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

 const p = path.join(
    rootDir,
    'data',
    'products.json'
);

const getProductsFromFile = cb => {   // helper function to look nicer
    
        fs.readFile(p,(err,fileContent) => {   // if don't use callbacks it will return even before it reads the file.
            if(err) {
               return cb([]);
            }
            else{
                cb(JSON.parse(fileContent));
            }
        })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {  
            getProductsFromFile(products => {
            products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err) => {
            console.log(err);
        });
        });
    }

    static fetchAll(cb) {                     //directly call the function without creating instantiation object.
        getProductsFromFile(cb);
        //return products;  (no 'this' as it refers to local variable.)
    }
}