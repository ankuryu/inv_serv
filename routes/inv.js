const express = require('express')
const router = express.Router();
const inv = require('../routes/inv.js');

router.get('/api/mfg/:mfg', (req,res,next)=>{
  let mfg = req.params.mfg
  msg = `The mfg is ${mfg}`
  res.send(msg).statusCode(200)
});

router.get('/api/icode/:icode',(req,res,next)=>{
  let icode = req.params.icode
  msg = `The icode is ${icode}`
  res.send(msg).statusCode(200)
})


router.get('/api/asize/:asize',(req,res,next)=>{
  let asize = req.params.asize
  msg = `The asize is ${asize}`
  res.send(msg).statusCode(200)
})


router.get('/api/isu/:mfg/:icode/:asize',(req,res,next)=>{
  let mfg = req.params.mfg
  let icode = req.params.icode
  let asize = req.params.asize
  msg = `The Sales of mfg is ${mfg} icode is ${icode} and asize  is ${asize}`
  res.send(msg).statusCode(200)
})

router.get('/api/rcp/:mfg/:icode/:asize',(req,res,next)=>{
  let mfg = req.params.mfg
  let icode = req.params.icode
  let asize = req.params.asize
  msg = `The Receipt of mfg is ${mfg} icode is ${icode} and asize  is ${asize}`
  res.send(msg).statusCode(200)

})

module.exports = router ;
