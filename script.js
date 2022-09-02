
const startForm = document.getElementById('start-form')
const startBox = document.getElementById('start-box')
const questionBox = document.getElementById('question-box')
const questionAsked = document.getElementById('question');



startForm.addEventListener('submit', function(e){
    e.preventDefault();
    localStorage.setItem('category', startForm.category.value);
    localStorage.setItem('difficulty', startForm.difficulty.value);
    localStorage.setItem('quantity', startForm.quantity.value);
    return window.location.replace("game.html")
    // getAPIData(startForm.category.value,startForm.difficulty.value, startForm.quantity.value);
//     startQuiz();
})



// async function getAPIData(category,difficulty, questions){
    // var response = await fetch("https://opentdb.com/api.php?amount="+ questions+"&category="+category+"&difficulty="+difficulty+"&type=multiple");
//     var quizData = await response.json();
//     console.log(quizData);
//     console.log(quizData.results[0].question);
// }

// function startQuiz(){
//     console.log('quiz is starting');
//     return window.location.replace("game.html")
// }
