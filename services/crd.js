
const sqlite = require('sqlite3').verbose();
const path = require("path");
const db3 = require('./aadb.js')
var dbout = null;
opn_crd()


async function opn_crd(){
  //console.log("db:",db)
  rt = await db3.open(path.resolve(__dirname,'../db/crcard.db3'))
  console.log("Credit Card Database Opened",rt)
}

async function getAll(co) {
  co = co.toLowerCase()
  sql = `select * from citi${co};`
  ret = await db3.query(sql,[])
  return ret
}

async function getOne(co,id) {
  co = co.toLowerCase()
  sql = `select * from citi${co} where id = ? ;`
  ret = await db3.query(sql,[id])
  return ret

}

async function putOne(co,id) {
  co = co.toLowerCase()
  sql = `Update citi${co} set crd = ?,vou=? ldgr = ? where id = ? ; `
  ret = await db3.run(sql,dat)
  return ret

}

async function delOne(co,id) {


}

async function addOne(co,dat) {


}
// ===================================================
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
    dbout.prepare(sql).all(params,(err,row)=>{
      if(err) reject("Read Error :"+err.message)
      else{
        resolve(row)
      }
    })
  })
}

function run(sql,params){
  return new Promise((resolve,reject)=>{
    dbout.prepare(sql).run(params,(err,row)=>{
      if(err) reject()
      else{
        resolve(row)
      }
    })
  })
}


module.exports = {
 getOne,
 getAll,
 putOne,
 delOne,
 addOne
}

