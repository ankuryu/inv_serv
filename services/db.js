const sqlite = require('sqlite3');
const path = require("path");
console.log("Directory : ",path.resolve(__curdir,'db'))
const db = new sqlite(path.resolve('inv.db3'));

function query(sql,params){
 return db.prepare(ql).all(params);
}
function run(sql,params){
 return db.prepare(ql).run(params);
}


module.exports = {
  query,
  run
}
