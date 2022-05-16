const express = require('express')
const router = express.Router();
const outsrv = require('../services/outserv.js');


router.get('/rcv/:co',(req,res,next)=>{
  let co = req.params.co
  try{
    console.log(`Select * from ${co}rcvbl;`)
    let rslt = outsrv.getAllRecv(co).then( (rt)=>{
    res.json(rt).status(200)
    } );

  } catch(err){
    console.log(err.message)
  }
})

router.get('/pay/:co',(req,res,next)=>{
  let co = req.params.co
  try{
    console.log(`Select * from ${co}paybl;`)
    let rslt = outsrv.getAllPybl(co).then((rt)=>{
      res.json(rt).status(200)
    })

  } catch(err){
    console.log(err.message)
  }
})

module.exports = router

