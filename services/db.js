const sqlite = require('sqlite3').verbose();
const path = require("path");
console.log("Directory : ",path.resolve(__dirname,'../db/inv2122.db3'))
const db = new sqlite.Database(path.resolve(__dirname,'../db/inv2122.db3'));
rslt = []
function query(sql,params){
  rt = [0,1,2]
  db.prepare(sql).all(params,(err,row)=>{
    rslt = row ? row.slice() : rt ;
     console.log("rt : ",rt)
  //return rt
    //return row
  });
     console.log("rt2 : ",rt)
}
function run(sql,params){
  rt = []
  db.prepare(sql).run(params,(err,row)=>{
    rt = row ? row.slice() : rt ;
  });
  return rt
}


module.exports = {
  query,
  run,
  rslt
}
