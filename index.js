const express=require('express')
const path=require('path')
const port=process.env.PORT||4000

const app=express()

app.use(express.static(__dirname))

app.use(express.json())

app.get('*',(req,res)=>{
     res.sendFile(__dirname+'/error.html')
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})