#!/user/bin/ node
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');
var storage = require('./__init__')
const FileStorage = require('./engine/file_storage');

class BaseModel{
    constructor(
        options = {
            id: uuidv4().toString(),
            created_at: new Date(),
            updated_at: new Date(),
        }
    )

    {
        this.id = options.id;
        this.created_at = options.created_at;
        this.updated_at = options.updated_at;
        this.__class__ = this.constructor.name;
    }

    __init__(kwargs) {
        if (kwargs) {
            for (let key in kwargs) {
                this[key] = kwargs[key];
            }

            if (this.created_at in kwargs) {
                this.created_at = kwargs.created_at;
            } else {
                this.created_at = new Date();
            }

            if (this.updated_at in kwargs) {
                this.updated_at = kwargs.updated_at;
            } else {
                this.updated_at = new Date();
            }

            this.__class__ = this.constructor.name;
        } else {
            this.id = uuidv4().toString();
            this.created_at = new Date();
            this.updated_at = new Date();
            this.__class__ = this.constructor.name;
        }

        return this;
    }

    __str__() {
        return `${this.__class__}(id=${this.id})(class=${this.__class__})`;
    }

    to_save() {
        this.updated_at = new Date();
        storage.new(this);
    }

    to_dict() {
        let dict = {};

        dict.id = this.id;
        dict['__class__'] = this.__class__;
        dict['created_at'] = this.created_at;
        dict['updated_at'] = this.updated_at;

        for (let key in this) {
            if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && key !== '__class__') {
                dict[key] = this[key];
            }
        }

        return dict;
    }
}

module.exports = BaseModel;
