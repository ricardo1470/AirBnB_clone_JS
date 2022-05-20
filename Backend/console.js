#!/usr/bin/node

const cmd = require('node-cmd');
const path = require('path');
const fs = require('fs');
const { argv } = require('process');
const BaseModel = require('./models/BaseModel');

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
        if (line.length === 0) {
            console.log('** class name missing **');
            return;
        }
    }

    static show(args, line) {
        if (line.length === 0) {
            console.log('** class name missing **');
            return;
        }
    }

    static destroy(args, line) {
        if (line.length === 0) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else if (line.length === 1) {
            console.log('** instance id missing **');
            return;
        } else if (!line[1]) {
            console.log('** no instance found **');
            return;
        }
    }

    static all(args, line) {
        if (line.length === 0) {
            console.log('** class name missing **');
            return;
        }
    }

    static update(args, line) {
        if (line.length === 0) {
            console.log('** class name missing **');
            return;
        } else if (!line) {
            console.log('** class doesn\'t exist **');
            return;
        } else if (line.length === 1) {
            console.log('** instance id missing **');
            return;
        } else if (!line[1]) {
            console.log('** no instance found **');
            return;
        } else if (line.length === 2) {
            console.log('** attribute name missing **');
            return;
        } else if (!line[2]) {
            console.log('** value missing **');
            return;
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
            } else if (!cmd){
                process.stdout.write('(hbnb) ');
            } else {
                console.log(`Command: ${cmd} not found`);
            }
        })
    }
}

HBNBCommand.run(process.argv.slice(2));
