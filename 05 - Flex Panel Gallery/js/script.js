const panels = document.querySelectorAll(".panel");

// Open and expand the panel 
function toggleOpen() {
	this.classList.toggle('open');
	// this.classList.toggle('open-active');
}

// Bring in the hidden text
function toggleActive(event) {
	if (event.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));