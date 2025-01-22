alert("Hello, world!");

let number_of_numbers = prompt("Say a number of numbers you want to have a possibilities") 

let secret_Number = parseInt(Math.random() * number_of_numbers + 1);
console.log(secret_Number)

let attempts = 1;
let kick;

while (kick != secret_Number){
    kick = prompt(`Say a number between 1 and ${number_of_numbers}`);

    if (kick == secret_Number){
        break
    } else{
        if (kick > secret_Number){
            alert(`The number is less than ${kick}`);
        } else {
            alert(`The number is greater than ${kick}`);
        }
        attempts++;
    }
}

let attempts_name = attempts > 1 ? "attemps" : "attemp";

alert(`Congratulations! You wrote the secret number! The number is ${secret_Number} and the number of ${attempts_name} is ${attempts}`);