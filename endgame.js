const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');
const endScore = localStorage.getItem('endScore');
const finalQuestions = localStorage.getItem('totalQuestions');
const memeDisplayed = document.getElementById('meme');

finalScore.innerText = endScore;
totalQuestions.innerText = finalQuestions;

function displayMeme(){
    if(endScore/finalQuestions <= 0.60){
        memeDisplayed.src = 'img/atleastyoutriedmeme.jpg';
        console.log("you're dumb af");
    } else if(endScore/finalQuestions > 0.60 && endScore/finalQuestions <= 0.80){
        memeDisplayed.src = 'img/proud.jfif';
        console.log("you're only sort of dumb");
    } else 
    memeDisplayed.src = 'img/badass.jpg';
    console.log("you are not dumb");
}

displayMeme();