
//created var x so we can use later in code
var x;
var position = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
//created one big array with all questions and answers
var questions = [
["How many 10 acre or more lakes are there in Minnesota?", "11,876", "11,842", "12,864", "9,632", "B" ],
["Minnesota has 86,939 square miles and is ranked 12th in size. Which state is larger?", "Michigan", "Idaho", "Kansas", "Utah", "A" ],
["As of 2016, what is the estimated population of Minnesota?", "7,233,956", "7,432,983", "5,519,952", "8,467,224", "C"],
["Which of the following was not invented in Minnesota?", "Stapler", "Silced Bread", "Airplane Oxygen Mask", "Milky Way Candy Bar", "B"],
["Which of these is not located in Minnesota?", "World's Largest Mustache", "World's Largest Musky", "World's Largest Ball of Twine", "World's Largest Raspberry", "B"]
];
function _(x) {
	return document.getElementById(x);
}

//creates questions
 function renderQuestion() {
	quiz = _("quiz");
	if (position >= questions.length) {
		stopTimer();
		quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>";
		_("quiz_status").innerHTML = "Let's see what kind of Minnesotan you are.";
		position = 0;
		correct = 0;
		return false;
		clearInterval(x);
		$("#timeLeft").hide();



	}
	_("quiz_status").innerHTML = "Question "+(position+1)+" of "+questions.length;
	question = questions[position][0];
	chA = questions [position][1];
	chB = questions [position][2];
	chC = questions [position][3];
	chD = questions [position][4];
	quiz.innerHTML = "<h3>"+question+"</h3>";
	quiz.innerHTML += "<input type ='radio' name='choices' value='A'> "+chA+"<br>";
	quiz.innerHTML += "<input type ='radio' name='choices' value='B'> "+chB+"<br>";
	quiz.innerHTML += "<input type ='radio' name='choices' value='C'> "+chC+"<br>";
	quiz.innerHTML += "<input type ='radio' name='choices' value='D'> "+chD+"<br><br>";
	quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}

	//can add a page here to tell them if they got it right or wrong
	if (choice == questions[position][5]) {
		correct++;
	}
	//else statemnt if they got wrong
	position++;
	renderQuestion();
	clearInterval(x);
	startTimer();
}

function startTimer(){
	var seconds = 15;
	x = setInterval(function(){
	$("#timeLeftSpan").html(seconds);
	seconds--
	if (seconds ==0){
	alert("Time is Up!");
	clearInterval(x);
}
}, 1000)}

function stopTimer(){
	$("#timeLeftSpan").addClass("timerDone");
}

//window.addEventListener("load", renderQuestion, false);

$("#start").on("click", function(){
$(this).hide();
startTimer();
renderQuestion();	
});

// $('#start').on('click', function(){
// 	$(this).hide();



