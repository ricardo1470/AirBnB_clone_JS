#!/usr/bin/node
const BaseModel = require('../../models/base_model');

let my_model, my_model_json;

my_model = new BaseModel();
my_model.name = "My First Model";
my_model.my_number = 89;
console.log(my_model);
my_model.to_save();
console.log(my_model);
my_model_json = my_model.to_dict();
console.log(my_model_json);
console.log("JSON of my_model:");

for (let key in my_model_json) {
    console.log(`${key}: ${my_model_json[key]}`);
}
