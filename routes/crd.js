const express = require('express')
const router = express.Router();
const crd = require('../services/crd.js');

router.get('/kc/',(req,res,next)=>{
  try {
    // get all entries of the citi7303
    let msg = 'Distinct MFG'
    console.log("/kc")
    let rslt =  crd.getAllkc().then((a)=>{console.log(a)
      res.json(a).status(200)
    })
    //console.log("result",rslt)
  } catch(err){
    console.log(err.message)
  }
});

router.get('/pm/',(req,res,next)=>{
  try {
    // get all entries of the citi7303
    let msg = 'Distinct MFG'
    console.log("/pm")
    let rslt =  crd.getAllpm().then((a)=>{console.log(a)
      res.json(a).status(200)
    })
    //console.log("result",rslt)
  } catch(err){
    console.log(err.message)
  }
});

module.exports = router ;
