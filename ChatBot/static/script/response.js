var nameCount = 0;
var ageCount = 0;
function getBotResponse(input) {
    //rock paper scissors
    if (input == "") {
        return "Summa Enter Mattum thattathaa!!";
    }
    else if (input == "Hi" || input == "hi") {
        return "Well, What's Your Name ?";
    } else if (isLetter(input) && nameCount < 1) {
        nameCount++;
        return "Good,How old are You ?";
    } else if ((Number(input) >= 1 && Number(input) <= 100) && input.length <= 3 && ageCount < 1) {
        ageCount++;
        return `${input} Really it\'s Unbelievable `;
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else {
        return "Try asking something else!";

    }
    function isLetter(str) {
        return str.length >= 3 && str.match(/[a-z]/i);
    }
}