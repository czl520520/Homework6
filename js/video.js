var video;


function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol=document.querySelector("#volume");
	vol.innerHTML= video.volume * 100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate * 0.8;
  	console.log("Speed is "+ currentSpeed);
} 

function increaseSpeed() {
    currentSpeed = currentSpeed * 1.25;
    video.playbackRate = currentSpeed;
	console.log("Speed is "+ currentSpeed);
} 

function skipAhead() {
	let Time = video.currentTime + 60;
	if(Time > video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	else{
        video.currentTime = Time;
	}
	console.log("Current location is "+ video.currentTime);
} 
function mute() { 
	var mute_button = document.getElementById("mute");
  	if (video.muted){
  		video.muted = false;
  		mute_button.innerHTML = "Mute";
  		console.log("Unmuted");
  		}
  	else{
       	video.muted = true;
       	mute_button.innerHTML = "Unmute";
       	console.log("Muted");
		}
}



function changeVolume() {
	var volumrslider = document.getElementById("volumslider");
	video.volume = 0.01 * volumePercent;
    document.querySelector("#volume").innerHTML = volumePercent + "%";
	console.log("Volume is " + volumePercent);
}
       

function gray() {
	video.classList += "grayscale";
	console.log(video.classList);
	

	console.log("In grayscale")
}

function color() {
	document.querySelector("#myVideo").classList.add("grayscale");
    console.log(video.classList);
    

	console.log("In color") 
}
