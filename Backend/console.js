#!/usr/bin/node

const cmd = require('node-cmd');
const uiid = require('uuid/v4');
const path = require('path');
const shlex = require('shlex');
const dataTime = require('node-datetime')
const fs = require('fs');
const { exec } = require('child_process');
const storage = require('./models/__init__');

class HBNBCommand extends cmd.Cmd {
    constructor() {
        super();
        this.prompt = 'hbnb> ';
        this.commands = {
            'help': this.help,
            'quit': this.quit,
        };
    }

    help() {
        console.log('help');
    }

    quit() {
        console.log('quit');
        process.exit();
    }

    do_quit(line) {
        this.quit();
    }
}
