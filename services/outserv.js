
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
  sql = `select * from ${ co }pybl;`
  ret = await dbo3.query(sql,[])
  return ret

}

async function getSmryRcv(co) {

}

async function getSmryPay(co) {

}


async function getPrtyRcv(co,name){

}

async function getPrtyPay(co,name){

}
