var video = document.querySelector('.video');
var volume = document.querySelector('#volume')
var mute = document.querySelector('#mute')
var slider = document.querySelector('#slider')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.textContent = '100%'
});

document.querySelector('#pause').addEventListener('click', function(){
	console.log("Pause Video");
	video.pause(); 
});

document.querySelector('#slower').addEventListener('click', function() {
	video.playbackRate *= .90
	console.log(`New speed is ${video.playbackRate}`)
})

document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate *= 1.10
	console.log(`New speed is ${video.playbackRate}`)
})

document.querySelector('#skip').addEventListener('click', function() {
	console.log(`Original location is ${video.currentTime}`)
	if (video.currentTime + 10 < video.duration) {
	  video.currentTime += 10;
	  console.log(`New location is ${video.currentTime}`)
	} else {
	  video.currentTime = 0;
	  console.log('Going back to beginning')
	  console.log(`New location is ${video.currentTime}`)
	}
  })

mute.addEventListener('click', function() {
	if (!video.muted){
		video.muted = !video.muted; 
		mute.textContent = 'Unmute'
	}
	else if (video.muted) {
		video.muted = !video.muted
		mute.textContent = 'Mute'
	}
})

slider.addEventListener('change', function() {
	video.volume = slider.value / 100
	volume.textContent = `${slider.value}%`
})

document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', function() {
	video.classList.remove('oldSchool')
})