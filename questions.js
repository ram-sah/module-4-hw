//declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear")
var goBack = document.getElementById("goBack");

//Retrives local storage
var allScores = localStorage.getItem("allScores");
allScores=JSON.parse(allScores);

if (allScores !== null){
    for (var i = 0; i< allScores.length; i++){
       var creatEl = document.createElement("li");
       creatEl.textContent=allScores[i].initials + " " +allScores[i].score;
       highScore.appendChild(creatEl);
    }
}

//Event listener to clear scores
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

//Event listener to move to the index.html page
goBack.addEventListener("click", function(){
    window.location.replace("./index.html");
});

//var with array and object for questions
var questions= [
    {
        title: "Question-1: Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"] ,
        answer: "alerts"
    },
    {
        title: "Question-2: What is the correct way to call method on the math global object?",
        choices: ["random.math()", "Random.math()", "Random.Math()", "Math.random()"],
        answer: "Math.random()"
    },
    {
        title: "Question-3: What functionn is used to print in to the console?",
        choices: ["console.log()", "console", "function()", "console.Log"],
        answer: "console.log()"
    },
    {
        title: "Question-4: The condition in an if/else ststement is enclosed within -----.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Question-5: String values must be enclosed within _____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
];

//Decleared variables
var score = 0;
var questionIndex = 0;

// Decleared variables from index.html page Start working code 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#statrTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

//Seconds left is 20 seconds per question
var secondsLeft = 101;
//holds interval time
var holdInterval = 0;
// holds penalty time
var penalty = 10;
//creates new element
var ulCreate = document.createElement("ul");

//triggers timer on the button to shows a display on the screen
timer.addEventListener("click", function(){
    //Since timer originally set to zero, we check zero
    if (holdInterval === 0){
        holdInterval = setInterval(function(){
            secondsLeft--;
            currentTime.textContent = "Remaining Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time is over!";
            }
        },1000);
    }
    render(questionIndex);
});

//Render questions and choices to page
function render(questionIndex) {
    //clear existing data
    questionsDiv.innerHTML= " ";
    ulCreate.innerHTML= "";
    // for loops to loop through all information of array
    for (var i = 0; i < questions.length; i++) {
        //appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    //change new list for each of question choices
    userChoices.forEach(function(newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));        
    });    
}
//Event to compare choices with answer 
function compare(Event) {
    var element = event.target;
    if (element.matches("li")) {
        
    }
}