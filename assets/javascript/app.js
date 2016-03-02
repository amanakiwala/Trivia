//array of correct answers
//var correctAnswer =["January","Nitrogen","Arctic Ocean","Australia","Crust","Argon","Molten iron and nickel","Alaska","Sargasso Sea","Pacific Ocean"];

var answers = {
	question1: 
		{
			yourAnswer: "",
			correctAnswer: "January"
		},
	question2:
		{
			yourAnswer: "",
			correctAnswer: "Nitrogen"
		},
    question3:
        {
        	yourAnswer: "",
        	correctAnswer:"Arctic Ocean"
        },
    question4:
        {
        	yourAnswer: "",
        	correctAnswer:"Australia"
        },		
    question5:
        {
        	yourAnswer: "",
        	correctAnswer:"Crust"
        },		
    question6:
        {
        	yourAnswer: "",
        	correctAnswer:"Argon"
        },		
    question7:
        {
        	yourAnswer: "",
        	correctAnswer:"Moltan iron and nickel"
        },		
    question8:
        {
        	yourAnswer: "",
        	correctAnswer:"Alaska"
        },		
    question9:
        {
        	yourAnswer: "",
        	correctAnswer:"Sargasso Sea"
        },		
    question10:
        {
        	yourAnswer: "",
        	correctAnswer:"Pacific Ocean"
        },		                            		
}



// create a function to check
// does answers.question1.yourAnswer == answers.question1.correctAnswer
var check =function(){
if(answers.question1.yourAnswer == answers.question1.correctAnswer) {
	correct++;
    console.log("yay")
}

else {
	wrong++;
}

if(answers.question2.yourAnswer == answers.question2.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question3.yourAnswer == answers.question3.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question4.yourAnswer == answers.question4.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question5.yourAnswer == answers.question5.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question6.yourAnswer == answers.question6.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question7.yourAnswer == answers.question7.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question8.yourAnswer == answers.question8.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question9.yourAnswer == answers.question9.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
if(answers.question10.yourAnswer == answers.question10.correctAnswer) {
    correct++;
}
else{
    wrong++;
}
}
//getting text value for each clicked radiobutton
$('#form1 input').on('change', function() {
   alert($('input[name=q1]:checked', '#form1').val()); 
});
$('#form2 input').on('change', function() {
   alert($('input[name=q2]:checked', '#form2').val()); 
});
$('#form3 input').on('change', function() {
   alert($('input[name=q3]:checked', '#form3').val()); 
});
$('#form4 input').on('change', function() {
   alert($('input[name=q4]:checked', '#form4').val()); 
});
$('#form5 input').on('change', function() {
   alert($('input[name=q5]:checked', '#form5').val()); 
});
$('#form6 input').on('change', function() {
   alert($('input[name=q6]:checked', '#form6').val()); 
});
$('#form7 input').on('change', function() {
   alert($('input[name=q7]:checked', '#form7').val()); 
});
$('#form8 input').on('change', function() {
   alert($('input[name=q8]:checked', '#form8').val()); 
});
$('#form9 input').on('change', function() {
   alert($('input[name=q9]:checked', '#form9').val()); 
});
$('#form10 input').on('change', function() {
   alert($('input[name=q10]:checked', '#form10').val()); 
});

//game counters
var correct = 0;
var wrong = 0;
var notAnswered = 0;


//function for timer

var seconds = 30;
$('.startButton').click(run);
function run(){
	counter = setInterval(increment,1000);

}
function increment(){
	seconds --
	document.getElementById('time').innerHTML =('<h1>' + "Time remaining : " + seconds + '</h1>')
	if (seconds === 0){
		stop();
		//alert('times up');
		reset(); // Keep finishing reset. 
	}
}
function stop(){
	clearInterval(counter);
}
function reset(){
	seconds = 30 ;
	correct = 0 ;
	wrong = 0 ;
	notAnswered = 0 ;

}
$('#correct').append(correct);
$('#wrong').append(wrong);
$('#notAnswered').append(notAnswered);
