const sqlite = require('sqlite3').verbose();
const path = require("path");
console.log("Directory : ",path.resolve(__dirname,'../db/inv2122.db3'))
const db = new sqlite.Database(path.resolve(__dirname,'../db/inv2122.db3'));

function query(sql,params){
  let rt = []
  db.prepare(sql).all(params,(err,row)=>{
     console.log("row : ",row)
     if(!err){
      rt = row
       console.log('Rt : ',rt)
    } 
    return rt
  });
}
function run(sql,params){
  let rt = []
  db.prepare(sql).run(params,(err,row)=>{
    if(!err){
      rt = row
    } 
    return rt
  });
}


module.exports = {
  query,
  run
}
