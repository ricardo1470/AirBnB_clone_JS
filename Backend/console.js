#!/usr/bin/node

const cmd = require('node-cmd');
const path = require('path');
const fs = require('fs');
const { argv } = require('process');
var BaseModel = require('./models/base_model');
var storage = require('./models/__init__');
var FileStorage = require('./models/engine/file_storage')


class HBNBCommand extends cmd.run{
    constructor(
        options = {
            id: uuidv4().toString(),
        }
    )

    {
        this.quit = quit;
        this.help = help;
        this.EOF = EOF;
    }

    static help(args) {
        const helps = {
            'EOF': 'Quit the program',
            'quit': 'Quit command to exit the program',
            'help': 'Print this help menu',
        };

        console.log(`Documented commands (type help <topic>):`);
        console.log('========================================');
        console.log('EOF  help  quit');
        console.log('========================================');

        for (let key in helps) {
            console.log(`${key} - ${helps[key]}`);
        }

    }

    static quit() {
        console.log('Bye!');
        process.exit(0);
    }

    static EOF() {
        console.log('Bye!');
        process.exit(0);
    }

    static create(args, line) {
        // Creates a new instance of BaseModel, saves it (to the JSON file) and prints the id
        if (line < 2) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else {
            let obj = new BaseModel(line[0]);
            obj.save();
            console.log(obj.id);
        }
    }

    static show(args, line) {
        // Prints the string representation of an instance based on the class name and id
        if (line === 1) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else if(line < 3) {
            console.log('** instance id missing **');
            return;
        } else {
            let obj = storage.all(line[0]);
            if (!obj) {
                console.log('** no instance found **');
                return;
            } else {
                console.log(obj);
            }
        }
    }

    static destroy(args, line) {
        // Deletes an instance based on the class name and id (save the change to the JSON file)
        if (line === 1) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else if(line < 3) {
            console.log('** instance id missing **');
            return;
        } else {
            let obj = storage.all(line[0]);
            if (!obj) {
                console.log('** no instance found **');
                return;
            } else {
                storage.delete(obj);
            }
        }
    }

    static all(args, line) {
        // Prints all string representation of all instances based or class name
        if (line === 1) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else {
            let obj = storage.all(line[0]);
            if (!obj) {
                console.log('** no instance found **');
                return;
            } else {
                console.log(obj);
            }
        }
    }

    static update(args, line) {
        // Updates an instance based on the class name and id by adding or updating attribute
        if (line === 1) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else if(line < 3) {
            console.log('** instance id missing **');
            return;
        } else {
            let obj = storage.all(line[0]);
            if (!obj) {
                console.log('** no instance found **');
                return;
            } else {
                let key = line[1];
                let value = line[2];
                obj.update(key, value);
            }
        }
    }

    static run() {
        process.stdout.write('(hbnb) ');
        process.stdin.on('data', (data) => {
            let cmd = data.toString().trim();
            if (cmd === 'help') {
                HBNBCommand.help();
            } else if (cmd === 'quit') {
                HBNBCommand.quit();
            } else if (cmd === 'EOF') {
                HBNBCommand.EOF();
            } else if (cmd.includes('create')) {
                HBNBCommand.create(cmd);
            } else if (cmd.includes('show')) {
                HBNBCommand.show(cmd);
            } else if (cmd.includes('destroy')) {
                HBNBCommand.destroy(cmd);
            } else if (cmd.includes('all')) {
                HBNBCommand.all(cmd);
            } else if (cmd.includes('update')) {
                HBNBCommand.update(cmd);
            } else if (!cmd){
                process.stdout.write('(hbnb) ');
            } else {
                console.log(`Command: ${cmd} not found`);
            }
        })
    }
}

HBNBCommand.run(process.argv.slice(2));
