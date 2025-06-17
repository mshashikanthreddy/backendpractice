const express = require("express"); 
const app = express();
const bodyParser = requiure('body-parser');

app.use(bodyParser.urlencoded({extended: false})); // used for parsing form data not for files,imagees
//Use extended: false if you only expect simple key-value pairs.
//Use extended: true if you expect nested objects or arrays.
app.use('/add-product',(req,res,next)  => {

    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button><form>');
});

app.use("/product",(req,res,next) => {

    console.log(req.body);
    res.redirect('/');
})
    
 // we have to add paths on priority basis as requests goes from top to bottom
// use "next" only if you want to go to next requests.

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1> hello express.js </h1>') 
});
// here we use "path" filter to filter out requests based on paths. 

app.listen(3000);