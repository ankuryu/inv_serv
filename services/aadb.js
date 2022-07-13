
const sqlite = require('sqlite3').verbose();
const path = require("path");
//const db = new sqlite.Database(path.resolve(__dirname,'../db/inv2122.db3'));

var db = null;
opn_inv()



async function opn_inv(){
  //console.log("db:",db)
  rt = await open(path.resolve(__dirname,'../db/inv2122.db3'))
  console.log("Inv Database Opened",rt)

}

function open(path){
  return new Promise( function(resolve,reject){
    //console.log("path ",path)
    db = new sqlite.Database(path,function(err){
      if(err) reject("Open Error " + err.message)
      else { resolve(db)
      }  
    })
  })
}

function query(sql,params){
  return new Promise( (resolve,reject)=>{ 
    db.prepare(sql).all(params,(err,row)=>{
      if(err) reject("Read Error :"+err.message)
      else{
        resolve(row)
      }
    })
  })
}

function run(sql,params){
  return new Promise((resolve,reject)=>{
    db.prepare(sql).run(params,(err,row)=>{
      if(err) reject()
      else{
        resolve(row)
      }
    })
  })
}


 module.exports = {
  db,
  open,
  query,
  run
}

