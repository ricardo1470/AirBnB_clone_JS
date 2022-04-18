#!/usr/bin/node
const BaseModel = require('../../models/base_model');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');

let my_model, my_model_json;


all_objs = storage.all()
console.log("-- Reloaded objects --")
for (let obj_id in all_objs.keys) {
    obj = all_objs[obj_id]
    console.log(obj)
}
console.log("-- Create a new object --")
my_model = BaseModel()
my_model.name = "My_First_Model"
my_model.my_number = 89
my_model.save()
console.log(my_model)
