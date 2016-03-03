var socket = io();

socket.on('connect',function(){
	console.log('User connect to socket.io!');

});

socket.on('message',function(message){
	console.log('New message:');
	console.log(message.text);
});