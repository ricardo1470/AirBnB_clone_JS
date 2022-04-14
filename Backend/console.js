#!/user/bin/ node

const cmd = require('node-cmd');
const uiid = require('uuid/v4');
const path = require('path');
const shlex = require('shlex');
const dataTime = require('node-datetime')

// class HBNBCommand(cmd.Cmd)
class HBNBCommand extends cmd.Cmd {
    prompt = 'hbnb> ';
}
