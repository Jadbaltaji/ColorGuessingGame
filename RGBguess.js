var numSquares=6;
var colors=[];
var pickedColor;
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var squares= document.querySelectorAll(".square");

init();

function init(){
	//Mode Buttons
	setModeButtons();
	setUpSquares();
	
	reset();
}


function setModeButtons(){
	for(var i=0; i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares=3 : numSquares = 6;
		reset();

	})
}
}

function setUpSquares(){
	for (var i =0; i< squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor=colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//Grab color of clicked square
			var clickedColor= this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent="Correct!";
				resetButton.textContent="Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
			} else {
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		
		});
	}
}

function reset(){
	resetButton.textContent="New Color";
	messageDisplay.textContent=""
	colors = generateRandomColors(numSquares);
	h1.style.backgroundColor="steelblue";
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}

	
}

/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i =0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i =0;i<squares.length; i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}

});*/

resetButton.addEventListener("click", function(){
	reset();	
})


/*colorDisplay.textContent=pickedColor;*/


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	 var random = Math.floor(Math.random() *colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	//make and array
	var arr=[];
	// repeat num times
	for(var i=0; i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r= Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g= Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b= Math.floor(Math.random()*256);
	"rgb(r, g, b"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}