const hdr = document.getElementById('hdr');
const bdy = document.getElementById('bdy');
const ftr = document.getElementById('ftr');
const mnthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dyArr = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

// this "function" gets the "var" request and over writes td data.
function currentTime() {
	const d = new Date();
	let hr = d.getHours();
	let min = d.getMinutes();
	let ampm = 'AM';
	let dy = dyArr[d.getDay()]; // will need to rig array
	let dt = d.getDate();
	let mnth = mnthArr[d.getMonth()]; // will need to rig array
	let yr = d.getFullYear();
	let msg = '';

	// hr greater than 12
	if (hr >= 12) {
		hr = hr - 12;
		ampm = 'PM';
	}

	// min less than 10
	if (min < 10) {
		min = `0${min}`;
	}

	// message according to time
	if (hr < 6 && ampm === 'AM') {
		msg = "Don't disturb!, Sleeping!.";
	} else if (hr === 7 && ampm === 'AM') {
		msg = 'Good morning!. Should be wide awake by now.';
	} else if (hr === 11 && ampm === 'AM') {
		msg = 'Afternoon closing in';
	} else if (hr === 12 && ampm === 'PM') {
		msg = 'Take a break. Grab some lunch.';
	} else if (hr === 3 && ampm === 'PM') {
		msg = 'Get ready to quit work for the day!';
	} else if (hr === 4 && ampm === 'PM') {
		msg = 'Get some dinner';
	} else if (hr === 8 && ampm === 'PM') {
		msg = 'Time to relax a bit, get ready to sleep';
	} else {
		msg = 'Nothing at this time!';
	}

	// gets battery level
	navigator.getBattery().then(function (e) {
		// console.log(bttry.level);
		let bttry = parseInt(e.level * 100);
		ftr.children[1].innerHTML = `<i class="fa fa-battery-half" aria-hidden="true"></i> ${bttry}%`;
	});

	// prints results
	hdr.children[0].textContent = `${msg}`;
	bdy.children[0].textContent = `${hr}:${min} ${ampm}`;
	ftr.children[0].textContent = `${dy} - ${mnth}/${dt}/${yr}`;
}

// refire function
// var refresh = setInterval(currentTime, 1000);
currentTime();