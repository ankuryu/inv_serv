//const db = require('./db.js')
const config = require('../config')

const db3 = require('../services/aadb')
//const db3 = require('../services/db')

function getMultiple(page=1){
  

}

async function getAllMfg(){
  let sql = "Select distinct mfg from pmisu2122 ;"
<<<<<<< HEAD
  ret = await db3.query(sql,[]); 
=======
  ret = db3.query(sql,[]); 
  ret = db3.rslt;
>>>>>>> 4c339d9115a9a8d5b98113e42cee886a31ded60c
  console.log("mfg :",ret)
  return ret 

}

async function getAllIcode() {
  let sql = "Select distinct icode from pmisu2122 ;"
  ret = await db3.query(sql,[]); 
  console.log("Icode:",ret)
  return ret 

}

function getIsu(mfg,icode){
  let sql = "Select mfg,icode,asize,sum(qty) from pmisu2122 where mfg = ? and icode = ? group by mfg,icode,asize;"
  ret = db3.query(sql,[]); 
  return ret 

}

function getRcp(mfg,icode){

  let sql = "Select mfg,icode,asize,sum(qty) from pmrcp2122 where mfg = ? and icode = ? group by mfg,icode,asize;"
  ret = db3.query(sql,[]); 
  return ret 



}


module.exports = {
  getMultiple,
  getAllMfg,
  getAllIcode,
  getIsu,
  getRcp,
  
}
