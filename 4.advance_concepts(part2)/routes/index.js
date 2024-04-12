var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/failed",function(req,res){
  req.flash("error","Failed to login!!!!!!");
  res.send("Done")
})
router.get("/redirect",function(req,res){
 let  message=req.flash("error");
//  console.log(message);
 res.send(message);
})
module.exports = router;
