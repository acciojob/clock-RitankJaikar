//your JS code here. If required.
const timer =  document.querySelector("#timer");

setInterval(() => {
	let time = new Date();
	timer.innerText = time.toLocaleString();
}, 1000);