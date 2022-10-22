const express = require('express')
const cors = require('cors')

const port = process.env.PORT ||5000

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('homepage of this server is running')
})

app.listen(port,()=>{
    console.log('Travel yeeah guru listening to port',port)
})