'use strict';
const mysql=require('mysql');
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SPARCLab1",
    database:"VNPTApp"
});
console.log('login access');
module.exports=db;