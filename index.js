const express = require("express")
const app =express()
app.get("/", (req,res)=>{
    res.json("heloo")
})
app.listen(5000,()=>{
    console.log("Listening On Port 5000")
})