const express = require('express')
const router = express.Router();
const outsrv = require('../services/outserv.js');


router.get('/api/rcv/:co',(req,res,next)=>{
  let co = req.param.co
  try{
    console.log(`Select * from ${co}rcvbl;`)

  } catch(err){
    console.log(err.message)
  }
})

router.get('/api/pay/:co',(req,res,next)=>{
  let co = req.param.co
  try{
    console.log(`Select * from ${co}paybl;`)

  } catch(err){
    console.log(err.message)
  }
})
