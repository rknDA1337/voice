//Node.js
var socket;
function connect(){
	//Create a socket and connect to the server
	socket = io.connect('http://chippi.se:1337');
	
	socket.on('users', function(data){	
	$('#users').text("Users Connected: " + data.users);
});

	socket.on('newChatMsg', function(data){
		console.log("from server " + data.msg);
		$('#chatArea').append(data.user + ": " + data.msg + "\n");
		$('#chatArea').animate({ scrollTop: $('#chatArea')[0].scrollHeight}, 1000);
	});
	
};

function sendChatMsg(data){
		socket.emit('chatMsg', data);
		console.log("sending to server " + data);
}