let inputMin = document.querySelector("#min");
let inputMax = document.querySelector("#max");
let inputTip = document.querySelector("#tip");
let response = document.querySelector(".response");
let btn = document.querySelector(".btn");
let restart = document.querySelector(".restart");

let min = 0;
let max = 100;

inputMin.innerHTML = min;
inputMax.innerHTML = max;

let getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let resultInt = getRandomInt(min, max);

btn.addEventListener("click", (e) => {
	e.preventDefault();
	isTrue();
});

function isTrue() {
	let answer = document.createElement("p");
	answer.classList.add("fadeIn");

	let lowerInt = `Moje číslo je <b>menšie</b> ako <strong class="false">${inputTip.value}</strong>`;
	let higherInt = `Moje číslo je <b>väčšie</b> ako <strong class="false">${inputTip.value}</strong> `;

	if (inputTip.value == "" || inputTip.value > max || inputTip.value < min) {
		cleanInput(inputTip);
		return;
	}

	if (inputTip.value > resultInt) {
		answer.innerHTML = lowerInt;
		response.appendChild(answer);
	}
	if (inputTip.value < resultInt) {
		answer.innerHTML = higherInt;
		response.appendChild(answer);
	}
	if (inputTip.value == resultInt) {
		answer.innerHTML = `
		číslo <strong class="true">${inputTip.value}</strong> je <strong class="true">SPRÁVNE !</strong>
			<br>
		<a href="#" class="restart">Nová Hra</a>
		`;
		response.appendChild(answer);
	}
	cleanInput(inputTip);
}

// new game
document.addEventListener("click", (e) => {
	if (e.target.className === "restart") {
		location.reload();
	}
});

// clear inputs
let cleanInput = (targetInput) => {
	targetInput.value = "";
	targetInput.focus();
};
