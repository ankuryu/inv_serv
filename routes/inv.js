const express = require('express')
const router = express.Router();
const inv = require('../services/inv.js');

router.get('/api/mfg/', (req,res,next)=>{
  try {
    let msg = 'Distinct MFG'
    console.log("api/mfg")
    let rslt = inv.getAllMfg()
    console.log(rslt)
    res.send(msg).status(200)
  } catch(err){
    console.log(err.message)
  }
});

router.get('/api/icode/',(req,res,next)=>{

  try {
    let rslt = inv.getAllIcode()
    console.log(rslt)
    msg = `The icode is `
    res.send(msg).status(200)
  } catch(err){
    console.log(err.message)
  }
})


router.get('/api/asize/',(req,res,next)=>{
  try {
    let rslt = inv.getAllMfg()
    msg = `The asize is `
    res.send(msg).status(200)
  } catch(err){
    console.log(err.message)
  }
})


router.get('/api/isu/:mfg/:icode/',(req,res,next)=>{
  try {
    let mfg = req.params.mfg
    let icode = req.params.icode
    let rslt = inv.getIsu()
    msg = `The Sales of mfg is ${mfg} icode is ${icode} and asize  is ${asize}`
    res.send(msg).statusCode(200)
  } catch(err){
    console.log(err.message)
  }
})

router.get('/api/rcp/:mfg/:icode/:asize',(req,res,next)=>{
  try {
    let mfg = req.params.mfg;
    let icode = req.params.icode;
    let rslt = inv.getRcp();
    msg = `The Receipt of mfg is ${mfg} icode is ${icode} and  `
    res.send(msg).statusCode(200)
  } catch(err){
    console.log(err.message)
  }

})

module.exports = router ;
