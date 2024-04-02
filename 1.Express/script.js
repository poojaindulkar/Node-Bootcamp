const express =require("express")
const app=express();
app.set("view engine","ejs");
app.use(express.static("./public"))
// app.use((req,res,next)=>{
//     console.log("Inside middleware");
//     next();
// })
app.get('/',function(req,res){
    res.render("index")
})
app.get('/contact',function(req,res){
    res.render("contact")
})
app.get('/profile/:username',function(req,res){
    let username=req.params.username
    res.send(`Hello ${username}`)
})
app.listen(3000);