const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on('greet',(name)=>{
    console.log(`Welcome, ${name}`);
});
myEmitter.on('exit',(code)=>{
    console.log(`exit event recived. code: ${code}`)
});
myEmitter.emit('greet','btech students');
myEmitter.emit('greet','btech students');
myEmitter.emit('exit',0);