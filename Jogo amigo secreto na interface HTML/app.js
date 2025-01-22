let arrayNumbers = [];
let limitNumber = 10;
let SecretNumber = createRandomNumber();
let number_attempts = 1

function show_text(tag, text){
    let variable = document.querySelector(tag);
    variable.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function showStartMensage(){
    show_text("h1", "Secret number game");
    show_text("p", "Say a number between 1 and 10");
}

showStartMensage();

function verify_guess(){
    let input_number = document.querySelector('input').value;


    if (input_number == SecretNumber){
        show_text('h1', 'Congratulations!');

        let text_attemps = number_attempts > 1 ? "attemps" : "attemp";
        show_text('p', `You discovered the secret number with ${number_attempts} ${text_attemps}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (input_number < SecretNumber){
            show_text('p', `The number is greater than ${input_number}`);
        } else{
            show_text('p', `The number is less than ${input_number}`);
        }
        number_attempts++;
        clearDisplay();
    }
}

function createRandomNumber(){
    let  selectNumber = parseInt(Math.random() * 10 + 1);
    
    let number_of_elements = arrayNumbers.length;
    if (number_of_elements == limitNumber) {
        arrayNumbers = [];
    }

    if (arrayNumbers.includes(selectNumber)){
        return createRandomNumber();
    } else {
        arrayNumbers.push(selectNumber);
        console.log(arrayNumbers)
        return selectNumber;
    }
}

function clearDisplay(){
    guess = document.querySelector('input');
    guess.value = '';
}


function restartGame(){
    let SecretNumber = createRandomNumber();
    let number_attempts = 1;
    clearDisplay();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    showStartMensage();
}