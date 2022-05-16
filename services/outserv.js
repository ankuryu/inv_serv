
//const db = require('./db.js')
const config = require('../config')

const dbo3 = require('../services/outdb')

function getMultiple(page=1){

}

async function getAllRecv(co) {
  sql = `select * from ${ co }rcvbl ;`
  ret = await dbo3.query(sql,[])
  return ret

}

async function getAllPybl(co) {
  sql = `select * from ${ co }paybl;`
  ret = await dbo3.query(sql,[])
  return ret

}

async function getSmryRcv(co) {
  sql = `select pname,sum(amt) from ${co}rcvbl group by pname`
  ret = await dbo3.query(sql,[]);
  return ret
}

async function getSmryPay(co) {
  sql = `select pname,sum(amt) from ${co}paybl group by pname`
  ret = await dbo3.query(sql,[]);
  return ret

}


async function getPrtyRcv(co,name){

}

async function getPrtyPay(co,name){

}


module.exports = {
getAllRecv,getAllPybl,
getSmryRcv,getSmryPay,
getPrtyRcv,getPrtyPay
}
