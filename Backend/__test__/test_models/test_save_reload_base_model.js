#!/usr/bin/node
const BaseModel = require('../../models/base_model');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');
var storage = require('../../models/__init__');

var my_model;


all_objs = storage.all()
console.log("-- Reloaded objects --")
for (let key in all_objs){
    obj = all_objs[key]
    console.log("this is obj", obj)
}
console.log("-- End Reloaded objects --")

console.log("-- Create a new object --");
my_model = new BaseModel();
my_model.name = "My_First_Model";
my_model.my_number = 89;
my_model.to_save();
console.log(my_model);
