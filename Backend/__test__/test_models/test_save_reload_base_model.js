#!/usr/bin/node
const BaseModel = require('../../models/base_model');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');

let my_model, my_model_json;