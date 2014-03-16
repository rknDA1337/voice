navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;
						  
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;			
var constraints = {audio:true};
window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;

RTCPeerConnection = webkitRTCPeerConnection;

var context = new AudioContext();

//Om allt funkar, kör detta
function successCallback(localMediaStream) {
	console.log("works");
	var microphone = context.createMediaStreamSource(localMediaStream);
	
  	// microphone -> filter -> destination.
  	microphone.connect(context.destination);
	//filter.connect(context.destination);
}

//Om fel inträffar
function errorCallback(error){
console.log("navigator.getUserMedia error: ", error);
}

//Om getUserMedia stöds i webbläsaren
if(navigator.getUserMedia){
	console.log("getUserMedia() is supported!");
	navigator.getUserMedia(constraints, successCallback, errorCallback);

}else{
	console.log("fail");
}
