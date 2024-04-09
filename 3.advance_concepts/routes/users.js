/*
*MongoDB
1) Install MongoDB
2) Install mongoosejs
   npm i mongoose
3) make schema
4) create model andd export



|-----------------------------------------------------|
|     Code Side           |      MongoDB side         |
|-----------------------------------------------------|
|      DB setup      <----|--->  DB Formation         |
|      Model         <----|--->  Collection           |
|      Schema        <----|--->  Documents            |
|-----------------------------------------------------|


*/



const mongoose=require("mongoose");
//! Node gets connected to mongoDB through mongoose (server is running on 127.0.0.1 (i.e localhost) and it's port is 27017 (By default port for mongoDB))
mongoose.connect("mongodb://127.0.0.1:27017/practice") //* With help of this setup DB will be created with "practice" name


// * Schema defines how document(Smallest entity in collection) will looks like

const userschema=mongoose.Schema({
  username: String,
  name: String,
  age:Number
})

module.exports=mongoose.model("user",userschema)