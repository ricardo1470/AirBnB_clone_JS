#!/user/bin/ node
const { v4: uuidv4 } = require('uuid');
const kwargs = require('kwargsjs');

class BaseModel{
    __init__(kwargs, ...args) {
        let j,k;

        if (!kwargs) {
            for (j= 0; j < kwargs.length ; j++) {
                if (k != '__class__') {
                    setattr(this, k, kwargs[j]);
                }
            }
            if ('created_at' in kwargs) {
                this.created_at = new Date(kwargs['created_at']);
            }
            if ('updated_at' in kwargs) {
                this.updated_at = new Date(kwargs['updated_at']);
            }
        } else {
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
        }
    }


    __str__() {
        return `${this.__class__}(id=${this.id})(class=${this.__class__})`;
    }

    to_save() {
        this.updated_at = new Date();
    }

    to_dict() {
        let dict = {};

        dict['__class__'] = this.__class__;
        dict['updated_at'] = this.updated_at.toISOString();
        dict.id = this.id;
        dict['created_at'] = this.created_at.toISOString();

        for (let key in this) {
            if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && key !== '__class__') {
                dict[key] = this[key];
            }
        }

        return dict;
    }
}

module.exports = BaseModel;
