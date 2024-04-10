var express = require('express');
var router = express.Router();
const userModel=require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  // res.send("Hello");
});


router.get("/create", async function(req,res){
  const createuser=await userModel.create({
    username: "Neha",
    name:"Neha",
    age:"17"
  })
  
  // res.send(`User Created Succesfully !!!! ${createuser}`)
  res.send(createuser)
})

router.get("/alluser",async function(req,res){
  const alluser=await userModel.find(); //! find() returns ans in array
  res.send(alluser)
})

router.get("/oneuser", async function(req,res){
  const user=await userModel.findOne({age:17});
  //if user with specific condition is not present it returns null
  // console.log(user);
  res.send(user);
})


router.get("/delete",async function(req,res){
  let deleteUser= await userModel.findOneAndDelete({
    username:"Pooja"
  });
  res.send(deleteUser);
})

module.exports = router;
