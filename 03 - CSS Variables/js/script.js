// Main script file for the project

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
	// console.log(this.dataset); // an object that collects the data attribute values from HTML

	const suffix = this.dataset.sizing || ''; // retrieves the value from the "data-sizing" custom attribute or appends an empty string if the value is null (or if the value does not have a suffix, like a colour hex code)

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Change the CSS property based on the value that is changed

}

// Listen to events when the values change and when the mouse moves the sliders
inputs.forEach(input => input.addEventListener("change", handleUpdate));

inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
