const quizCategory = {
    "General Knowledge" : 9,
    "Sports": 21,
    "History": 23,
    "Music": 12
};
const startForm = document.getElementById('start-form')

// adding an event listener to the start form. Taking the form data and using it to call the async function and get requested quiz data. 
startForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(startForm.category.value,startForm.difficulty.value, startForm.quantity.value);
    search(startForm.category.value,startForm.difficulty.value, startForm.quantity.value)
})

async function search(category,difficulty, questions){
    var response = await fetch("https://opentdb.com/api.php?amount="+ questions+"&category="+category+"&difficulty="+difficulty+"&type=multiple");
    var quizData = await response.json();
    console.log(quizData);
}

