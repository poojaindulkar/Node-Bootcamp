const express=require("express")
const app=express();
app.set("view engine","ejs")
app.use(express.static("./public"))


app.get('/',function(req,res){
    res.render('loading')
})
app.listen(3000)