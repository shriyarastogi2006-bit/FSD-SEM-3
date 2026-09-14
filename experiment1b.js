const EventEmitter = require('events');

const app = new EventEmitter();

app.on('login', (user) => {
      console.log(`${user} logged in`);
}); 

app.on('message', (msg) => {
    console.log(`message: ${msg}`);
});

app.emit('loggin','aman');
app.emit('message','welcome to node.js');