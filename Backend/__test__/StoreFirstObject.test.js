#!/user/bin/ node

const BaseModel = require('../models/base_model');
const baseTest = require('supertest');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');
const storage = require('../models/__init__');
const path = require('path');
const fs = require('fs');

describe('Test the FileStorage', () => {
    let my_model;

    beforeAll(() => {
        if(!fs.existsSync(path.join(__dirname, 'file.json'))){
            fs.writeFileSync(path.join(__dirname, 'file.json'), '{}');
        } else{
            storage.objects = JSON.parse(fs.readFileSync(path.join(__dirname, 'file.json'), 'utf8'));
        }
    })

    test('Test the all method', () => {
        expect(storage.all()).toEqual(storage.objects);
    })

    test('Test the new method', () => {
        my_model = new BaseModel();
        my_model.name = "My_First_Model";
        my_model.my_number = 89;
        my_model.to_save();
        expect(storage.all()).toEqual(storage.objects);
    })

    test('Test the save method', () => {
        fs.writeFileSync(path.join(__dirname, 'file.json'), JSON.stringify(storage.objects, null, '\t'), function (err) {
            if (err) throw err;
        });
    }, 10000)

    test('Test the reload method', () => {
        if(!fs.existsSync(path.join(__dirname, 'file.json'))){
            fs.writeFileSync(path.join(__dirname, 'file.json'), '{}');
        } else{
            storage.objects = JSON.parse(fs.readFileSync(path.join(__dirname, 'file.json'), 'utf8'));
        }
    })
});
