
 const buttonNext = document.querySelector('.btn--next');
 const buttonBack = document.querySelector('.btn--back');
 const sliderblockOne = document.querySelector('.block--one');
 const sliderblockTwo = document.querySelector('.block--two');
 const sliderblockThree = document.querySelector('.block--three');
 const sliderblockFour = document.querySelector('.block--four');
 const sliderblockActive = document.querySelector('.blockActive');



let step;
let myArray = [];
let timer;



myArray.push(sliderblockOne, sliderblockTwo, sliderblockThree, sliderblockFour );
myArray[0] = null;
myArray[1] = sliderblockOne;
myArray[2] = sliderblockTwo;
myArray[3] = sliderblockThree;
myArray[4] = sliderblockFour;



myArray[1].className = "blockActive";


buttonBack.addEventListener("click", function() {
	for (step = 0; step < 4; step++) {
	if (myArray[1].className == "blockActive") {

		setTimeout(function() {
			myArray[4].className = "blockActive"
		}, 200);
		myArray[1].className = "block";
	} else if (myArray[4].className == "blockActive") {
		setTimeout(function() {
			myArray[3].className = "blockActive"
		}, 200);
		myArray[4].className = "block";
	} else if (myArray[3].className == "blockActive") {
		setTimeout(function() {
			myArray[2].className = "blockActive"
		}, 200);
		myArray[3].className = "block";

	} else if (myArray[2].className == "blockActive"){
		setTimeout(function() {
			myArray[1].className = "blockActive"
		}, 200);
		myArray[2].className = "block";
	}
}});

buttonNext.addEventListener("click", function() {
	
for (step = 0; step < 4; step++) {
	if (myArray[1].className == "blockActive") {

		setTimeout(function() {
			myArray[2].className = "blockActive"
		}, 200);
		myArray[1].className = "block";

	} else if (myArray[2].className == "blockActive") {
		setTimeout(function() {
			myArray[3].className = "blockActive"
		}, 200);
		myArray[2].className = "block";
	} else if (myArray[3].className == "blockActive") {
		setTimeout(function() {
			myArray[4].className = "blockActive"
		}, 200);
		myArray[3].className = "block";

	} else if (myArray[4].className == "blockActive"){
		setTimeout(function() {
			myArray[1].className = "blockActive"
		}, 200);
		myArray[4].className = "block";
	}
}

});



function progress() {
	let elem = document.getElementById('progress_line');
	width = 25;
	id = setInterval(progressStatus, 20);

	function progressStatus() {
		if (myArray[1].className == "blockActive" && width >= 26) {
			width = 25;
		} else if (myArray[2].className == "blockActive" && width >= 51) {
			width = 50;
		} else if (myArray[3].className == "blockActive" && width >= 76) {
			width = 75;
		} else if (myArray[4].className == "blockActive" && width >= 101) {
			width = 100;
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
}

progress();
sliderTimer();


function sliderAuto() {
	if (myArray[1].className == "blockActive") {
		myArray[2].className = "blockActive";
		myArray[1].className = "block";
		sliderTimer();
	} else if (myArray[2].className == "blockActive") {
		myArray[3].className = "blockActive";
		myArray[2].className = "block";
		sliderTimer();
	} else if(myArray[3].className == "blockActive") {
		myArray[4].className = "blockActive";
		myArray[3].className = "block";
		sliderTimer();
	} else if(myArray[4].className == "blockActive") {
		myArray[1].className = "blockActive";
		myArray[4].className = "block";
		sliderTimer();
	}
}


function sliderTimer() {
	timer = setTimeout(sliderAuto, 8000);
}