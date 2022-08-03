const express = require('express');
const cors = require('cors')
const  app = express();
const port = 3000 || process.env.PORT ;
const invRouter = require('./routes/inv');
const outRouter = require('./routes/rcv')
const payRouter = require('./routes/pyb')
const crdRouter = require('./routes/crd')

app.use(cors())
app.use(express.json());

app.get('/',(req,res,next)=>{
 res.json({'message':'Alive'})

})


app.use('/inv',invRouter)
app.use('/out',outRouter)
app.use('/crd',crdRouter)
//app.use ('/pay',payRouter)

app.listen(port,()=>{
  console.log(`Listening on Localhost:${port}`)
})
