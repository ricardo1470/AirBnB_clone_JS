#!/user/bin/ node

const BaseModel = require('../models/base_model');
const baseTest = require('supertest');
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');

describe ('BaseModel', () => {
    test('should create a new BaseModel', () => {
        const my_model = new BaseModel();
        expect(my_model).toBeInstanceOf(BaseModel);
    });

    test('constructor', () => {
        const options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const my_model = new BaseModel(options);
        expect(my_model.id).toBe(options.id);
        expect(my_model.created_at).toBe(options.created_at);
        expect(my_model.updated_at).toBe(options.updated_at);
        expect(my_model.__class__).toBe(my_model.constructor.name);
    });

    test('__str__', () => {
        const options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const my_model = new BaseModel(options);
        expect(my_model.__str__()).toBe(`${my_model.constructor.name}(id=${my_model.id})(class=${my_model.__class__})`);
    });

    test('__str__', () => {
        const options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const my_model = new BaseModel(options);
        expect(my_model.__str__()).toBe(`${my_model.__class__}(id=${my_model.id})(class=${my_model.__class__})`);
    });

    test('__str__', () => {
        const options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const my_model = new BaseModel(options);
        my_model.to_save();
        expect(my_model.updated_at).toBeInstanceOf(Date);
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

    test('kwars', () => {
        const options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        };

        const my_model = new BaseModel(options);
        const kwargs = my_model.to_dict();
        expect(kwargs).toEqual({
            __class__: 'BaseModel',
            updated_at: my_model.updated_at.toISOString(),
            id: my_model.id,
            created_at: my_model.created_at.toISOString(),
        });
    });
});