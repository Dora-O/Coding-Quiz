var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

var questions = [{
    question: "What is the correct method of rounding the number 7.25 to the nearest integer?",
    choiceA: "round(7.25)",
    choiceB: "Math.rnd(7.25)",
    choiceC: "Math.round(7.25)",
    choiceD: "round.down(7.25)",
    correctAnswer: "c"
},

{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "27",
    choiceC: "1",
    choiceD: "12",
    correctAnswer: "c"
},

{
    question: "Which of these values can a boolean variable contain?",
    choiceA: "0 & 1",
    choiceB: "False",
    choiceC: "Any integer value",
    choiceD: "True & False",
    correctAnswer: "d"
},

{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"
},

{
    question: "Is there a difference between JavaScript and Java?",
    choiceA: "No, they are the same thing",
    choiceB: "One is coding and the other is coffee",
    choiceC: "Yes, they are two different languages",
    choiceD: "Yes, one has script and the other doesn't",
    correctAnswer: "c"
},
{
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"
},

{
    question: "Which of the following function of an array object adds and/or removes elements from an array?",
    choiceA: "toSource()",
    choiceB: "sort()",
    choiceC: "unshift()",
    choiceD: "splice()",
    correctAnswer: "d"
},
];

function start(){
    timeLeft = 90;
    document.getElementById("timeLeft")=timeLeft;

    timer = setInterval(function(){
        timeLeft--;
        document.getElementById("timeLeft")=timeLeft;

        if (timeLeft<= 0){
            clearInterval(timer);
            endGame();
        }
    })
}

function endGame(){
    clearInterval(timer);
    var quizEnding = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizQuestions")= quizEnding;
}

