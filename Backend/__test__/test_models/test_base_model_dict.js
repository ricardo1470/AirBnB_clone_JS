#!/usr/bin/node
const BaseModel = require('../../models/base_model');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');

let my_model, my_model_json;

my_model = new BaseModel();
my_model.name = "My_First_Model";
my_model.my_number = 89;
console.log(my_model.id);
console.log(my_model);
console.log(typeof(my_model.created_at));

console.log("--");
my_model_json = my_model.to_dict();
console.log(my_model_json);
console.log("JSON of my_model:");

for (let key in my_model_json.keys) {
    console.log(`${key}: ${my_model_json[key]}`)
};

console.log("--");
my_new_model = new BaseModel(my_model_json);
console.log(my_new_model.id);
console.log(my_new_model);

console.log("--");
console.log(typeof(my_new_model.__class__));
console.log(my_new_model);

console.log("--");
console.log('my_model is my_new_model');
console.log(my_model === my_new_model);
