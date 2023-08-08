
const express = require('express')
const router = express.Router();
const mcs = require('../services/mcsserv.js');


router.get('/stk/:mfg/:icode/:asize',(req,res,next)=>{
  let mfg = req.params.mfg
  let icode = req.params.icode
  let asize = req.params.asize
  try{
    console.log('mfg,icode,asize',mfg,icode,asize )
    let rslt = mcs.getStk(mfg,icode,asize).then( (rt)=>{
    res.json(rt).status(200)
    } );

  } catch(err){
    console.log(err.message)
  }
})

router.get('/sls/:mfg/:icode/:asize',(req,res,next)=>{
  let mfg = req.params.mfg
  let icode = req.params.icode
  let asize = req.params.asize
  try{
    console.log('mfg,icode,asize',mfg,icode,asize )
    let rslt = mcs.getSls(mfg,icode,asize).then( (rt)=>{
    res.json(rt).status(200)
    } );

  } catch(err){
    console.log(err.message)
  }
})

router.get('/pur/:mfg/:icode/:asize',(req,res,next)=>{
  let mfg = req.params.mfg
  let icode = req.params.icode
  let asize = req.params.asize
  try{
    console.log('mfg,icode,asize',mfg,icode,asize )
    let rslt = mcs.getPur(mfg,icode,asize).then( (rt)=>{
    res.json(rt).status(200)
    } );

  } catch(err){
    console.log(err.message)
  }
})
module.exports = router

