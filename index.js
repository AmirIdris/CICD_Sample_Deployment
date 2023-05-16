const express = require("express")
const app =express()
app.get("/", (req,res)=>{
    res.json("heloo")
})
app.listen(5002,()=>{
    console.log("Listening On Port 5000")
})