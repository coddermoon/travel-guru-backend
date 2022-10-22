const express = require('express')
const cors = require('cors')

const port = process.env.PORT ||5000
const places = require('./data/places.json')

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('wow homepage  of this server is running')
})

app.get('/places',(req,res)=>{
    res.send(places)
})

app.get('/places/:id',(req,res)=>{
const id = req.params.id;
const selectedPlace = places.find(place=> id== place.id)
res.send(selectedPlace)
})

app.listen(port,()=>{
    console.log('Travel yeeah guru listening to port',port)
})