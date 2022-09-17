const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app =express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/taskDB");

const structureSchema = new mongoose.Schema({
  country:String,
  vehicle:String,
  duration:String,
  date:String,
  num:String
});

const Data = new mongoose.model("data",structureSchema);

app.post("/data",function(req,res){
  const {dropdown1,dropdown2,dropdown3,id} = req.body;
  const details= new Data({
    country:dropdown1,
    vehicle:dropdown2,
    duration:dropdown3,
    num:id
  });
  details.save();
});

app.post("/date",function(req,res){
  const {datee,number} = req.body;
  console.log(datee);
    console.log(number);
  Data.findOne({id:number}, function (err, docs) {
    if(!err){
      docs.date = datee;
      docs.save();
      console.log(docs);
    }
  });
});

app.listen("8080",()=>{
  console.log("server is running on port 8080");
})
