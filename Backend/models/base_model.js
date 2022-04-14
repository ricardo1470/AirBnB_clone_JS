#!/user/bin/ node
const uuid = require('uuid/v4');
const path = require('path');
const dateTime = require('node-datetime');

// class BaseModel
class BaseModel{
    constructor(
        options = {
            id: uuid().tostring(),
            created_at: dateTime.create().format('Y-m-d H:M:S'),
            updated_at: dateTime.create().format('Y-m-d H:M:S'),
        }
    )

    this.id = options.id;
    this.created_at = options.created_at;
    this.updated_at = options.updated_at;
}