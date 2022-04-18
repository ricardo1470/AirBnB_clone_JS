#!/user/bin/ node
const path = require('path');
const fs = require('fs');
const BaseModel = require('../../models/base_model');

class FileStorage{
    #objects = {};
    #filePath = path.join(__dirname, 'file.json');

    all(){
        return this.#objects;
    }

    new(obj){
        this.#objects[obj.constructor.name + '.' + obj.id] = obj;
        this.#objects = obj;
    }

    save(){
        new_dict = {};

        for (let key in this.#objects){
            new_dict[key] = this.#objects[key].to_dict();
        }

        let json = JSON.stringify(new_dict);
        fs.writeFileSync(this.#filePath, json);
    }

    reload(){
        if (!this.#filePath ) {
            try{
                fs.readFileSync(this.#filePath, 'utf8');

                for (let key in this.#objects){
                    this.#objects[key] = new BaseModel(this.#objects[key]);
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}

module.exports = FileStorage;
