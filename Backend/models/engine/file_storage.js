#!/user/bin/ node
const path = require('path');
const fs = require('fs');
const BaseModel = require('../base_model');
const storage = require('../__init__');

class FileStorage {
    constructor() {
        this.file_path = path.join(__dirname, 'file.json');
        this.objects = {};
    }

    //Public class methods
    //all(self): returns the dictionary objects
    all() {
        return this.objects;
    }

    //new(self, obj): adds obj to the dictionary objects
    new(obj) {

        this.objects[obj.id] = obj;
        this.save();
    }

    save(){
        fs.writeFileSync(this.file_path, JSON.stringify(this.objects, null, '\t'), function (err) {
            if (err) throw err;
        });
    }

    reload() {
        if(!fs.existsSync(this.file_path)){
            fs.writeFileSync(this.file_path, '{}');
        } else{
            this.objects = JSON.parse(fs.readFileSync(this.file_path, 'utf8'));
        }
    }
}

module.exports = FileStorage;
