const db = require('./db.js')
const config = require('../config')
const db3 = require('../services/db')

function getMultiple(page=1){
  

}

function getAllMfg(){
  let sql = "Select distinct mfg from pmisu ;"
  ret = db3.query(sql,[]); 
  return ret 

}

function getAllIcode() {
  let sql = "Select distinct icode from pmisu ;"
  ret = db3.query(sql,[]); 
  return ret 

}

function getIsu(mfg,icode){
  let sql = "Select mfg,icode,asize,sum(qty) from pmisu where mfg = ? and icode = ? group by mfg,icode,asize;"
  ret = db3.query(sql,[]); 
  return ret 

}

function getRcp(mfg,icode){

  let sql = "Select mfg,icode,asize,sum(qty) from pmrcp where mfg = ? and icode = ? group by mfg,icode,asize;"
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
