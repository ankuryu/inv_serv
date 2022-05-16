

const sqlite = require('sqlite3').verbose();
const path = require("path");

var db = null;
opn_out()


async function opn_out(){
  //console.log("db:",db)
  rt = await open(path.resolve(__dirname,'../db/outstd.db3'))
  console.log("Outstanding Database Opened",rt)

}

function open(path){
  return new Promise( function(resolve,reject){
    //console.log("path ",path)
    dbout = new sqlite.Database(path,function(err){
      if(err) reject("Open Error " + err.message)
      else { resolve(dbout)
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

