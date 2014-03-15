navigator.getMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(

       // constraints
       {
           video: false,
           audio: true
       },

       // successCallback
       function (localMediaStream) {
           /*var video = document.querySelector('video');
           video.src = window.URL.createObjectURL(localMediaStream);
           video.onloadedmetadata = function (e) {
               // Do something with the video here.
           };
           */
           console.log("works");
       },

       // errorCallback
       function (err) {
           console.log("The following error occured: " + err);
           
       }

    );