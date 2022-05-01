const express = require('express');
const  app = express();
const port = 3000 || process.env.PORT ;
const invRouter = require('./routes/inv');

app.use(express.json());

app.get('/',(req,res,next)=>{
 res.json({'message':'Alive'})

})


app.use('/inv',invRouter)

app.listen(port,()=>{
  console.log(`Listening on Localhost:${port}`)
})
