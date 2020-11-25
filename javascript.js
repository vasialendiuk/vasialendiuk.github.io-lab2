let inputIn = document.querySelector('.input-in'); //input
let inputIn2 = document.querySelector('.input-in2'); //input
let button = document.querySelector('button'); //button
let div = document.querySelector('#result');

button.onclick = function (){
		let x = inputIn.value;
		let y = inputIn2.value;
	if (x > 0 && y > 0) {
		c = Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)));
		div.innerHTML = c;
	}else{
		div.innerHTML = 'Довжина сторони вказана неправильно!'
	}
}