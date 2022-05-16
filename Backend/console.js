#!/usr/bin/node

const cmd = require('node-cmd');
const path = require('path');
const fs = require('fs');
const { argv } = require('process');

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
