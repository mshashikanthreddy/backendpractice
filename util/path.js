const path = require('path');

module.exports = path.dirname(process.mainModule.filename); 
                //this refers to the path to the file i.e responsible for the fact our application is running.
               