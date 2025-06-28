const path = require('path');

const express = require("express");

const rootDir =  require('../util/path');

const router = express.Router();
// Routers allow you to organize your routes and middleware into modular, mountable route handlers. This helps keep your codebase clean,reusable and maintainable especially in larger applications.

// /admin/add-product => GET
router.get('/add-product',(req,res,next)  => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// /admin/add-product => POST
router.post("/add-product",(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})
 
module.exports = router;