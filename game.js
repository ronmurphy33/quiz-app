const questionAsked = document.getElementById('question');
const answerChoiceBtns = Array.from(document.getElementsByClassName('answer-choice'));
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score');
const category = localStorage.getItem('category');
const difficulty = localStorage.getItem('difficulty');
const quantity = localStorage.getItem('quantity');

console.log(category + " " + difficulty +" "+ quantity);

let currentQuestion = {};
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];
let maxQuestions = null;

let questions = [];

fetch("https://opentdb.com/api.php?amount="+ quantity+"&category="+category+"&difficulty="+difficulty+"&type=multiple")
.then(res => {
    return res.json();
})
.then(newQuestions => {
    console.log(newQuestions.results);
    questions = newQuestions.results.map((newQuestion) => {
    const formattedQuestion = {
        question : newQuestion.question,
    };

    const answerChoices = [...newQuestion.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * 3) +1;
    answerChoices.splice(formattedQuestion.answer-1,0,
    newQuestion.correct_answer);

    answerChoices.forEach((choice, index) => {
        formattedQuestion['choice'+(index +1)] = choice;
    })
    console.log(formattedQuestion);
    return formattedQuestion;
    })
    startGame();
});


startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    maxQuestions = availableQuestions.length;
    console.log('Total questions: '+maxQuestions);
    getNextQuestion();
}   

getNextQuestion =() =>{
    if(availableQuestions.length === 0){
        localStorage.setItem('endScore', score);
        localStorage.setItem('totalQuestions', maxQuestions);
        return window.location.replace("endgame.html");
    }
    questionCounter++;
    scoreText.innerHTML = ("Question: "+questionCounter+"/"+maxQuestions)
    console.log('question counter: '+questionCounter);
    const questionIndex = Math.floor(Math.random() *availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionAsked.innerText = currentQuestion.question;
    availableQuestions.splice(questionIndex,1);

    answerChoiceBtns.forEach( button =>{
        const number = button.dataset['number'];
        button.innerText = currentQuestion['choice' + number];
    })
}

answerChoiceBtns.forEach (button =>{
    button.addEventListener('click', e=>{
        const number = button.dataset['number'];
        if (currentQuestion.answer == number){
        console.log('correct answer bitch!');
        score ++;
        button.classList.add('correct');
        } else {
            console.log("wrong answer bitch!");
            button.classList.add('incorrect');
        }
        console.log("score: "+score);
        console.log(availableQuestions.length+" questions left");
        setTimeout( () =>{
            button.classList.remove('correct', 'incorrect');
            getNextQuestion();
        },1000)
})

});


