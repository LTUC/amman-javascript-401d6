'use strict';

const io = require('socket.io-client');
const emergencyChannel = io.connect('http://localhost:3000/emergency');

emergencyChannel.emit('join', 'fireDepartment');

emergencyChannel.on('fire', (payload)=> {
    console.log(" ... fire alarm we are coming ... ")
});