'use strict';
const util=require('util');
const mysql=require('mysql');
const db=require('./../db');
const fs=require('fs');
const { response } = require('express');
module.exports={
    store_room: (req,res) =>{
        let name1=req.body.Name1;
        let name2=req.body.Name2;
        console.log(name1 + ' '+name2);
        var sql='INSERT INTO Meet_Room(Name1,Name2,Content,FromTime,EndTime,Food,Size,Tittle,Room) VALUES ?';
        var data=[[req.body.Name1,req.body.Name2,req.body.Content,req.body.FromTime,req.body.EndTime,req.body.Food,req.body.Size,req.body.Tittle,req.body.Room]];
        db.query(sql,[data],(err,response)=>{
            if (err) throw err;
            res.json({
                message:'Insert Complete'
            })
        })
    },
    store_car: (req,res) =>{
        //let data=req.body;
        var data=[[req.body.Name,req.body.Time,req.body.Address,req.body.Size_Peo,req.body.Drive,req.body.Number_Car,req.body.Detail]];
        var sql='INSERT INTO Book_Car(Name,Time,Address,Size_Peo,Drive,Number_Car,Detail) VALUES ?';
        console.log(req.body.Name);
        db.query(sql,[data],(err,response)=>{
            if (err) throw err;
            res.json(
                {
                    message:'Insert Complete'
                }
            )
        })
    },
    get: (req,res)=>{
        console.log('Test Get');
        let sql='SELECT * FROM Meet_Room';
        db.query(sql,(err,response)=>
        {
            if (err) throw err;
            res.json(response);
        })
    }
}