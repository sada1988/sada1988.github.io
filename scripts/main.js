const myImage = document.querySelector('img');

myImage.onclick = () => {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/firefox.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	const myName = prompt('Input your name!');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
}

/*
const myHeading = document.querySelector('h1');

var date = new Date();
var second = date.getSeconds();

const myHeadingText = myHeading.textContent;
if (second % 2 == 0) {
	myHeading.textContent = 'Hello world!';
} else {
	myHeading.textContent = 'Mozilla is cool';
}
*/