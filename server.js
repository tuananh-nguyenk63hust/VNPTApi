let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let doten=require('dotenv');
doten.config();
let port=process.env.port || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let routes=require('./Api/router');
routes(app);
app.use(function(req,res)
{
    res.status(404).send({url: req.originalUrl+'not found'});
})
app.listen(port);
console.log("Test");
