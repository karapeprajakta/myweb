var express=require('express');
var app=express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
 res.send("Welcome to our website");}
);
app.listen(8080);
console.log("App is listenning on port 8080");
