var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

var questions = [{
    question: "What is the correct method of rounding the number 7.25 to the nearest integer?",
    options: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "round.down(7.25)"],
    answer: "Math.round(7.25)"
},

{
    question: "How many elements can you apply an 'ID' attribute to?",
    options: ["As many as you want", "27", "1", "12"],
    answer: "1"
},

{
    question: "Which of these values can a boolean variable contain?",
    options: ["0 & 1", "False", "Any integer value", "True & False"],
    answer: "True & False"
},

{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
    answer: "Document Object Model"
},

{
    question: "Is there a difference between JavaScript and Java?",
    options: ["No, they are the same thing", "One is coding and the other is coffee", "Yes, they are two different languages", "Yes, one has script and the other doesn't"],
    answer: "Yes, they are two different languages"
},
{
    question: "What is used primarily to add styling to a web page?",
    options: ["HTML", "CSS", "Python", "React.js"],
    answer: "CSS"
},

{
    question: "Which of the following function of an array object adds and/or removes elements from an array?",
    options: ["toSource()", "sort()", "unshift()", "splice()"],
    answer: "splice()"
},
];




