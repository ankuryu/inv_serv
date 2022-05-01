const db = require('./db.js')
const config = require('../config')
const db = require('../services/db')

function getMultiple(page=1){
  

}

function getAllMfg(){
  let sql = "Select distinct mfg from pmisu ;"
  ret = db.query(sql,[]); 
  return ret 

}

function getAllIcode() {
  let sql = "Select distinct icode from pmisu ;"
  ret = db.query(sql,[]); 
  return ret 

}

function getIsu(mfg,icode){

}

function getRcp(mfg,icode){


}


module.exports = {
  getMultiple,
  getAllMfg,
  getAllIcode,
  getIsu,
  getRcp,
  
}
