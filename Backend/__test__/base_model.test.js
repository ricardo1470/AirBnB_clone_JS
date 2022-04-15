#!/user/bin/ node

const BaseModel = require('../models/base_model');
const baseTest = require('supertest');
const { v4: uuidv4 } = require('uuid');

describe('BaseModel', () => {
    test('should create a new BaseModel', () => {
        const my_model = new BaseModel();
        expect(my_model).toBeInstanceOf(BaseModel);
    });

    test('should create a new BaseModel with options', () => {
        const my_model = new BaseModel({
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        });
        expect(my_model).toBeInstanceOf(BaseModel);
    });

    test('__str__', () => {
        const my_model = new BaseModel();
        expect(my_model.__str__()).toBe(`BaseModel(id=${my_model.id})(class=${my_model.__class__})`);
    });

    test('to_save', () => {
        const my_model = new BaseModel();
        my_model.to_save();
        expect(my_model.updated_at).toBeInstanceOf(Date);
    });

    test('to_dict', () => {
        const my_model = new BaseModel();
        const dict = my_model.to_dict();
        expect(dict).toEqual({
            __class__: 'BaseModel',
            updated_at: my_model.updated_at.toISOString(),
            id: my_model.id,
            created_at: my_model.created_at.toISOString(),
        });
    });
})