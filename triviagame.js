
//Start Document and Set Basic Variables.

$(document).ready(function() {

var rightAnswer = 0;
var wrongAnswer = 0;
var arrayCounter = 0;
var number = 60;


//question and array
var questions = [
{
    question: "What are baby goats called?",
    correctAnswer: "kid",
    choice1: "kid",
    choice2: "billy",
},{
    question: "Is a shark a fish or a mammal?",
    choice1: "fish",
    choice2: "mammal",
    correctAnswer: "fish",
},{
    question: "What are female elephants called?",
    choice1: "mammoth",
    correctAnswer: "cow",
    choice2: "cow"
},{
    question: "True or false? Rabbits are born blind.",
    correctAnswer: "True",
    choice1: "True",
    choice2:"False"
},{
    question : "What is the only continent on earth where Giraffes live in the wild?",
    correctAnswer : "Africa",
    choice1 : "New Zealand",
    choice2 : "Africa"
},{
    question : "What type of animal is the largest primate in the world?",
    choice1 : "hippopotamus",
    choice2 : "gorilla",
    correctAnswer : "gorilla"
},{
    question : " What is the name of an adult female horse??",
    choice1 : "steed",
    correctAnswer : "a mare",
    choice2 : "a mare"
},{
    question : "Groups of lions are known as what?",
    choice1 : "herd",
    correctAnswer : "prides",
    choice2 : "prides"
},{
    question : "The crocodile species is believed to have been around for how long?",
    correctAnswer : "200 million",
    choice1 : "200 million",
    choice2 : "2 million"
}];

//Start Timer
function run(){
      counter = setInterval(increment, 1000);
    }

function increment(){
      number--
      document.getElementById('time').innerHTML = (number)
      if (number === 0){
        // alert("the end");
        stop();
        showResults();
      }
    }

//Stop Timer
function stop(){
      clearInterval(counter);
    }


// Start Game Function
$('.start').click(function() {
    // alert("test");
    run();
    showQuestion();
    $('.start').hide();
});



// Show questions, need to figure a way out to make this display randomly.
function showQuestion() {
    $('.question').html(questions[arrayCounter].question);
    $('.answers').html("<li><input type='radio' name='optradio'>" + " " +
        questions[arrayCounter].choice1 + "</li><li><input type='radio' name='optradio'>" +  " " +
        questions[arrayCounter].choice2 + "</li><li><input type='radio' name='optradio' value='correct'>" + " " +
        questions[arrayCounter].correctAnswer + "</li>");
}

// Results
function showResults() {
    var percent = rightAnswer / questions.length * 100;
    var percentFixed = percent.toFixed(0);
    $('.question').hide();
    $('.answers').hide();
    $('.results').html("<p>Correct: " + rightAnswer + "</p><br>" + "<p>Incorrect: " + wrongAnswer + 
        "</p><br>" + "<p>Percentage Correct: " + percentFixed + "%</p>")
}



// Takes in input and saves the answers as right or wrong.
$('.answers').on('change', function() {
   if($('input[name=optradio]:checked', '.answers').val() == 'correct') {
    rightAnswer ++;
   } else {
    wrongAnswer ++;
   }; 
   arrayCounter ++;

//Game Finishes.
   if(arrayCounter == questions.length) {
        stop();
        $('#time').html("<h3>Game Over</h3>");
        showResults();
   } 
   else {
   showQuestion();
    }
});


var audio = new Audio('assets/sounds/theme.m4a');
    audio.play();


});

