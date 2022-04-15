#!/user/bin/ node
const { v4: uuidv4 } = require('uuid');

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
