const sqlite = require('sqlite3').verbose();
const path = require("path");
console.log("Directory : ",path.resolve(__dirname,'../db/inv2122.db3'))
const db = new sqlite.Database(path.resolve(__dirname,'../db/inv2122.db3'));

function query(sql,params){
 return db.prepare(sql).all(params);
}
function run(sql,params){
 return db.prepare(sql).run(params);
}


module.exports = {
  query,
  run
}
