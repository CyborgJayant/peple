const express=require('express')
const path=require('path')
const port=process.env.PORT||4000

const app=express()

app.use(express.static(__dirname))

app.use(express.json())

app.get('*',(req,res)=>{
     res.sendFile(__dirname+'/error.html')
})



app.post('/sendingEmail',(req,res)=>{
     console.log("req: ");
    const util = require('util')
    
    console.log(util.inspect(req.body, {showHidden: false, depth: null}))
    res.send({"thank":"you"});
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})