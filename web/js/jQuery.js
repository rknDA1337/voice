//jquery

$(document).ready(function() {
    $('#msgSend').click(function(){
		sendChatMsg($('#chatMsg').val());
		$('#chatMsg').val("");
	});
	
	connect();
});