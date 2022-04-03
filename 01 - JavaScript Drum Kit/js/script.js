// Function to play sound when a key is pressed
function playSound(e) {
	//console.log(e.keyCode)
	const audioKey = document.querySelector(`audio[data-key='${e.keyCode}']`)
	const keyPlayingAudio = document.querySelector(`.key[data-key='${e.keyCode}']`)

	if (!audioKey) return // --> stop the function from running if there is no key mapping

	// Otherwise, play the audio
	// But rewind first so that if the user likes to hit a key again and again, they'll be able to do so.
	audioKey.currentTime = 0 // rewind to 0 time
	audioKey.play() // then play the sound

	keyPlayingAudio.classList.add("playing") // Add the playing CSS class to style the key appearing on the viewport
	// console.log(keyPlayingAudio)
}

// Function to remove the transition animation/the CSS class named playing
function removeTransition(e) {
	// console.log(e.propertyName)
	if (e.propertyName != 'transform') return	// If the event we're looking for is not transform, skip, no change.

	// Otherwise, if the event is transform, then, remove the playing class because the sound has completed playing.
	//console.log(e.srcElement)
	//e.srcElement.classList.remove("playing")
	this.classList.remove("playing")
}

// Map the audio to a key, and animate the key on the page
window.addEventListener("keydown", playSound)

// For each key, set an event listener to see when the sound playing ends, to then remove the playing class from the div
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
