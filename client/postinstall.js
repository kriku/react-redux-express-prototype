const fs = require('fs');
const path = require('path');

function callback(args) {
    console.log(args);
}

function create(name) {
    const target = path.join(process.cwd(), 'src', name);
    const link = path.join(process.cwd(), 'node_modules', name);
	fs.symlink(target, link, 'junction', callback);
}

function createjs(name) {
    const target = path.join(process.cwd(), 'src', name + '.js');
    const link = path.join(process.cwd(), 'node_modules', name);
    fs.symlink(target, link, 'file', callback);
}

createjs('store');
createjs('utils');
create('actions');
create('reducers');
create('constants');
create('text');

