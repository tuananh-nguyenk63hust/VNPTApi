'use strict'
module.exports=function(app){
    let products=require('./controllers/ProductsController');
    app.route('/gets').get(products.get);
    app.route('/meet').post(products.store_room);
    app.route('/car').post(products.store_car);
}