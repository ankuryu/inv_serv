// file mcsserv.js

const config = require('../config')
const dbm3 = require('../services/mcsdb')

async function getStk(mfg,icode,asize,){
console.log("GetStk")
	sql = `SELECT mfg,icode,asize,sum(qty)*-1 as qty from pmisu where mfg = "${mfg}" and icode = "${icode}" and asize = "${asize}" group by mfg,icode,asize ;`
	rvi = await dbm3.query(sql,[])
	console.log("Rvi",rvi)
	sql = `SELECT mfg,icode,asize,sum(qty)*1 as qty from pmrcp where mfg = "${mfg}" and icode = "${icode}" and asize = "${asize}" group by mfg,icode,asize ;`
	rvr = await dbm3.query(sql,[])
	console.log("Rvr",rvr)
	
	rvs = Object.assign({},rvr)
	console.log(rvs)
	if(rvr.length && rvi.length){
	rvs[0].qty = rvr[0].qty + rvi[0].qty
	console.log("Rvs",rvs)
	} else 
		rvs = []
	return rvs
}

async function getSls(mfg,icode,asize) {
console.log("GetSls")
	sql = `SELECT mfg,icode,asize,sum(qty)*-1 as qty from pmisu where mfg = "${mfg}" and icode = "${icode}" and asize = "${asize}" group by mfg,icode,asize ;`
	rv = await dbm3.query(sql,[])
	console.log("RV",rv)
	return rv

}

async function getPur(mfg,icode,asize) {
console.log("GetPur")
	sql = `SELECT mfg,icode,asize,sum(qty)*1 as qty from pmrcp where mfg = "${mfg}" and icode = "${icode}" and asize = "${asize}" group by mfg,icode,asize ;`
	rv = await dbm3.query(sql,[])
	console.log(rv)
	return rv
}

module.exports = {
getSls, getStk, getPur
}
