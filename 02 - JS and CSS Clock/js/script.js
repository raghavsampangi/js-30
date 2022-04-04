// JS to make the clock "tick"

// Get the second, minute, and hour hands from the div
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function tickTock() {
	//Get the current time from the Date() object
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	//Get the seconds, minutes, and hours in degrees
	// Note that they are all offset by 90 degrees to offset the initial default of 90 degrees set for the transform in CSS
	const secondsDegrees = ((seconds / 60) * 360) + 90;	
	const minDegrees = ((minutes / 60) * 360) + 90;	
	const hourDegrees = ((hours / 12) * 360) + 90;	

	//Add rotation to the second hand (global var from the main execution context outside the function)
	// The rotation value is the same as the degrees obtained above for each second.
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	// Just like above, get the transformation for the minute hand, if the second hand rotation reaches 360deg or 0deg
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;

	// And if the hour is up, based on where the minute hand is, move the hour hand too
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	// console.log(hourDegrees, minDegrees, secondsDegrees);
}

// Call tickTock() every 1 second, so that the clock can be updated.
setInterval(tickTock, 1000);