const newForm = document.getElementById('new-form')

newForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(newForm.fname.value);
})