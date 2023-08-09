// filemcscb.js


const sqlite = require('sqlite3').verbose();
const path = require("path");

var dbm3 = null;
opn_out()


async function opn_out(){
  //console.log("db:",db)
  rt = await open(path.resolve(__dirname,'../db/mcs.db3'))
  console.log("MCS Database Opened",rt)

}

function open(path){
  return new Promise( function(resolve,reject){
    //console.log("path ",path)
    dbm3 = new sqlite.Database(path,function(err){
      if(err) reject("Open Error " + err.message)
      else { resolve(dbm3)
      }  
    })
  })
}

function query(sql,params){
  return new Promise( (resolve,reject)=>{ 
    dbm3.prepare(sql).all(params,(err,row)=>{
      if(err) reject("Read Error :"+err.message)
      else{
        resolve(row)
      }
    })
  })
}

function run(sql,params){
  return new Promise((resolve,reject)=>{
    dbm3.prepare(sql).run(params,(err,row)=>{
      if(err) reject()
      else{
        resolve(row)
      }
    })
  })
}


module.exports = {
  dbm3,
  open,
  query,
  run
}

