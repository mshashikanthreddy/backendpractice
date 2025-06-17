const express = require("express"); 
const app = express();

app.use('/add-product',(req,res,next)  => {

    console.log('In the middleware');
    res.send('<h1>The "add product" page</h1>');
    
}); // we have to add paths on priority basis as requests goes from top to bottom
// use "next" only if you want to go to next requests.

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1> hello express.js </h1>') 
});
// here we use "path" filter to filter out requests based on paths. 

app.listen(3000);