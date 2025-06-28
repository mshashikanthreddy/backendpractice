const path = require('path');

const express = require("express");

const rootDir =  require('../util/path');

const router = express.Router();

router.get('/',(req,res,next) => {
    /*  res.sendFile(path.join(__dirname,'..','views','shop.html')); It works for both linux & windows
        Here dirname gives path for current file or module and '..' is used to got one up level as shop.js 
        is in routes folder so, it goes to routes and from there to 'views'
        and in that 'shop.html' (1st method (same goes for 'admin.js')) 
    */
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;