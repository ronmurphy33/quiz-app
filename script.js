const quizCategory = {
    "General Knowledge" : 9,
    "Sports": 21,
    "History": 23,
    "Music": 12
}


async function search(diff, questions){
    var response = await fetch("https://opentdb.com/api.php?amount="+ questions+"&category=21&difficulty="+diff+"&type=multiple");
    var quizData = await response.json();
    console.log(quizData);
}

search("medium", 7);
