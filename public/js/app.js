var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

socket.on('connect',function(){
	console.log('User connect to the room!');

});

socket.on('message',function(message){
	// console.log('New message:');
	// console.log(message.text);

	var momentTime = moment.utc(message.timestamp);
	var $message = jQuery('.messages');

	$message.append('<p><strong>'+message.name+' '+momentTime.local().format('h:mm a')+'</strong></p>');
	$message.append('<p>'+message.text+'</p>');
	

});

// Handles submitting of new message
var $form = jQuery("#message-form");

$form.on('submit',function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message',{
		name: name,
		text: $message.val()
	});

	$message.val('').focus();
	
});